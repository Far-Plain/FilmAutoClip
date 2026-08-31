(function () {
  "use strict";

  const config = window.FILM_FRAME_STATS || {};
  const enabled = config.enabled !== false;
  const apiBaseUrl = normalizeApiBaseUrl(config.apiBaseUrl);
  const appVersion = String(config.appVersion || "unknown").slice(0, 32);
  const deviceStorageKey = "film-frame-anonymous-device-v1";
  const queueStorageKey = "film-frame-stats-queue-v1";
  const uuidPattern = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
  const maxFramesPerEvent = 5000;
  const numberFormatter = new Intl.NumberFormat("zh-CN");
  let flushPromise = null;
  let initialized = false;

  const els = {
    section: document.querySelector("#communityStats"),
    summary: document.querySelector("#communityStatsSummary"),
    userCount: document.querySelector("#communityUserCount"),
    frameCount: document.querySelector("#communityFrameCount"),
    status: document.querySelector("#communityStatsStatus")
  };

  function normalizeApiBaseUrl(value) {
    return typeof value === "string" ? value.trim().replace(/\/+$/, "") : "";
  }

  function readStorage(key) {
    try {
      return window.localStorage?.getItem(key) || "";
    } catch (_) {
      return "";
    }
  }

  function writeStorage(key, value) {
    try {
      window.localStorage?.setItem(key, value);
      return true;
    } catch (_) {
      return false;
    }
  }

  function createUuid() {
    if (typeof window.crypto?.randomUUID === "function") return window.crypto.randomUUID();
    const bytes = new Uint8Array(16);
    window.crypto?.getRandomValues?.(bytes);
    bytes[6] = (bytes[6] & 0x0f) | 0x40;
    bytes[8] = (bytes[8] & 0x3f) | 0x80;
    const value = Array.from(bytes, (byte) => byte.toString(16).padStart(2, "0")).join("");
    return `${value.slice(0, 8)}-${value.slice(8, 12)}-${value.slice(12, 16)}-${value.slice(16, 20)}-${value.slice(20)}`;
  }

  function getDeviceId() {
    const existing = readStorage(deviceStorageKey);
    if (uuidPattern.test(existing)) return existing;
    const deviceId = createUuid();
    writeStorage(deviceStorageKey, deviceId);
    return deviceId;
  }

  function readQueue() {
    try {
      const queue = JSON.parse(readStorage(queueStorageKey) || "[]");
      return Array.isArray(queue) ? queue.filter(isValidQueuedEvent) : [];
    } catch (_) {
      return [];
    }
  }

  function writeQueue(queue) {
    return writeStorage(queueStorageKey, JSON.stringify(queue));
  }

  function isValidQueuedEvent(event) {
    return Boolean(
      event
      && typeof event.event_id === "string"
      && uuidPattern.test(event.event_id)
      && typeof event.device_id === "string"
      && uuidPattern.test(event.device_id)
      && Number.isInteger(event.frame_count)
      && event.frame_count > 0
      && event.frame_count <= maxFramesPerEvent
    );
  }

  function setUiState(state, message) {
    if (!els.section) return;
    els.section.dataset.state = state;
    if (els.summary) els.summary.setAttribute("aria-busy", state === "loading" ? "true" : "false");
    if (els.status && message) els.status.textContent = message;
  }

  function renderStats(stats) {
    const users = Number(stats?.users);
    const frames = Number(stats?.frames);
    if (!Number.isSafeInteger(users) || users < 0 || !Number.isSafeInteger(frames) || frames < 0) {
      throw new Error("Invalid community statistics response");
    }
    if (els.userCount) els.userCount.textContent = numberFormatter.format(users);
    if (els.frameCount) els.frameCount.textContent = numberFormatter.format(frames);
    setUiState("ready", "全站匿名汇总 · 成功导出后更新");
  }

  async function requestJson(path, options = {}) {
    if (!apiBaseUrl || typeof window.fetch !== "function") throw new Error("Statistics API is unavailable");
    const controller = typeof AbortController === "function" ? new AbortController() : null;
    const timeout = controller ? setTimeout(() => controller.abort(), 8000) : 0;
    try {
      const response = await window.fetch(`${apiBaseUrl}${path}`, {
        ...options,
        mode: "cors",
        credentials: "omit",
        cache: "no-store",
        signal: controller?.signal
      });
      if (!response.ok) throw new Error(`Statistics API returned ${response.status}`);
      return await response.json();
    } finally {
      if (timeout) clearTimeout(timeout);
    }
  }

  async function refresh() {
    if (!apiBaseUrl) return false;
    setUiState("loading", "正在同步全站胶片计数");
    try {
      const stats = await requestJson("/api/stats");
      renderStats(stats);
      return true;
    } catch (error) {
      console.warn("Unable to load community statistics", error);
      setUiState("offline", "统计暂时离线 · 不影响本地裁剪");
      return false;
    }
  }

  async function flushPending() {
    if (!apiBaseUrl) return false;
    if (flushPromise) return flushPromise;

    flushPromise = (async () => {
      while (true) {
        const queue = readQueue();
        if (!queue.length) return true;
        const event = queue[0];
        try {
          const result = await requestJson("/api/events/export", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(event),
            keepalive: true
          });
          writeQueue(readQueue().filter((queued) => queued.event_id !== event.event_id));
          if (result?.stats) renderStats(result.stats);
        } catch (error) {
          console.warn("Community statistics event queued for retry", error);
          setUiState("offline", "统计等待联网重试 · 本次裁剪已安全保存在本机");
          return false;
        }
      }
    })().finally(() => {
      flushPromise = null;
    });

    return flushPromise;
  }

  function recordExport(frameCount) {
    if (!enabled) return Promise.resolve(false);
    const normalizedCount = Number(frameCount);
    if (!Number.isSafeInteger(normalizedCount) || normalizedCount <= 0) return Promise.resolve(false);

    const queue = readQueue();
    const deviceId = getDeviceId();
    const createdAt = new Date().toISOString();
    for (let remaining = normalizedCount; remaining > 0; remaining -= maxFramesPerEvent) {
      queue.push({
        event_id: createUuid(),
        device_id: deviceId,
        frame_count: Math.min(remaining, maxFramesPerEvent),
        created_at: createdAt,
        app_version: appVersion
      });
    }
    if (!writeQueue(queue)) return Promise.resolve(false);
    return flushPending();
  }

  async function synchronize() {
    await flushPending();
    await refresh();
  }

  function init() {
    if (initialized || !els.section || !enabled) return;
    initialized = true;
    els.section.hidden = false;
    if (!apiBaseUrl) {
      setUiState("offline", "统计服务待连接 · 成功导出记录将保存在本机");
      return;
    }
    window.addEventListener("online", synchronize);
    document.addEventListener("visibilitychange", () => {
      if (document.visibilityState === "visible") void synchronize();
    });
    void synchronize();
  }

  window.filmFrameStats = Object.freeze({
    init,
    recordExport,
    refresh,
    flushPending,
    getPendingCount: () => readQueue().length
  });

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init, { once: true });
  } else {
    init();
  }
})();
