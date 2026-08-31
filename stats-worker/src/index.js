const uuidPattern = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
const maxRequestBytes = 4096;

export function parseAllowedOrigins(value) {
  return new Set(
    String(value || "")
      .split(",")
      .map((origin) => origin.trim().replace(/\/$/, ""))
      .filter(Boolean)
  );
}

export function validateEventPayload(payload) {
  if (!payload || typeof payload !== "object" || Array.isArray(payload)) return "请求内容无效";
  if (typeof payload.event_id !== "string" || !uuidPattern.test(payload.event_id)) return "event_id 无效";
  if (typeof payload.device_id !== "string" || !uuidPattern.test(payload.device_id)) return "device_id 无效";
  if (!Number.isInteger(payload.frame_count) || payload.frame_count < 1 || payload.frame_count > 5000) {
    return "frame_count 必须是 1 到 5000 之间的整数";
  }
  if (payload.created_at !== undefined) {
    if (typeof payload.created_at !== "string" || payload.created_at.length > 40 || Number.isNaN(Date.parse(payload.created_at))) {
      return "created_at 无效";
    }
  }
  if (typeof payload.app_version !== "string" || !/^[0-9A-Za-z._-]{1,32}$/.test(payload.app_version)) {
    return "app_version 无效";
  }
  return "";
}

export async function hashDeviceId(deviceId, salt) {
  if (typeof salt !== "string" || salt.length < 16) throw new Error("DEVICE_HASH_SALT is not configured");
  const input = new TextEncoder().encode(`${salt}:${deviceId}`);
  const digest = await crypto.subtle.digest("SHA-256", input);
  return Array.from(new Uint8Array(digest), (byte) => byte.toString(16).padStart(2, "0")).join("");
}

function corsHeaders(origin = "*") {
  return {
    "Access-Control-Allow-Origin": origin,
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Max-Age": "86400",
    Vary: "Origin"
  };
}

function json(data, { status = 200, origin = "*", cacheControl = "no-store" } = {}) {
  return Response.json(data, {
    status,
    headers: {
      ...corsHeaders(origin),
      "Cache-Control": cacheControl,
      "Content-Type": "application/json; charset=utf-8",
      "X-Content-Type-Options": "nosniff"
    }
  });
}

function allowedWriteOrigin(request, env) {
  const origin = request.headers.get("Origin")?.replace(/\/$/, "") || "";
  return parseAllowedOrigins(env.ALLOWED_ORIGINS).has(origin) ? origin : "";
}

async function getStats(env) {
  const row = await env.DB.prepare(
    "SELECT user_count AS users, frame_count AS frames, updated_at FROM stats_totals WHERE id = 1"
  ).first();
  return {
    users: Number(row?.users || 0),
    frames: Number(row?.frames || 0),
    updated_at: row?.updated_at || null
  };
}

async function handleExportEvent(request, env, origin) {
  const contentLength = Number(request.headers.get("Content-Length") || 0);
  if (contentLength > maxRequestBytes) return json({ error: "请求内容过大" }, { status: 413, origin });

  let payload;
  try {
    payload = await request.json();
  } catch (_) {
    return json({ error: "请求必须是有效的 JSON" }, { status: 400, origin });
  }

  const validationError = validateEventPayload(payload);
  if (validationError) return json({ error: validationError }, { status: 400, origin });

  const deviceHash = await hashDeviceId(payload.device_id, env.DEVICE_HASH_SALT);
  if (env.STATS_RATE_LIMITER) {
    const rateLimit = await env.STATS_RATE_LIMITER.limit({ key: deviceHash });
    if (!rateLimit.success) return json({ error: "请求过于频繁" }, { status: 429, origin });
  }

  const results = await env.DB.batch([
    env.DB.prepare(
      `INSERT OR IGNORE INTO export_events
       (event_id, device_hash, frame_count, client_created_at, app_version)
       VALUES (?1, ?2, ?3, ?4, ?5)`
    ).bind(
      payload.event_id,
      deviceHash,
      payload.frame_count,
      payload.created_at || null,
      payload.app_version
    ),
    env.DB.prepare(
      `INSERT OR IGNORE INTO anonymous_users (device_hash)
       SELECT ?1 WHERE EXISTS (
         SELECT 1 FROM export_events WHERE event_id = ?2 AND device_hash = ?1
       )`
    ).bind(deviceHash, payload.event_id),
    env.DB.prepare(
      `UPDATE stats_totals
       SET user_count = (SELECT COUNT(*) FROM anonymous_users),
           frame_count = (SELECT COALESCE(SUM(frame_count), 0) FROM export_events),
           updated_at = CURRENT_TIMESTAMP
       WHERE id = 1`
    )
  ]);

  return json({
    accepted: Number(results[0]?.meta?.changes || 0) > 0,
    stats: await getStats(env)
  }, { status: 200, origin });
}

export default {
  async fetch(request, env) {
    try {
      const url = new URL(request.url);

      if (request.method === "GET" && url.pathname === "/api/stats") {
        return json(await getStats(env));
      }

      if (request.method === "OPTIONS") {
        const origin = allowedWriteOrigin(request, env);
        if (!origin) return json({ error: "来源不允许" }, { status: 403 });
        return new Response(null, { status: 204, headers: corsHeaders(origin) });
      }

      if (request.method === "POST" && url.pathname === "/api/events/export") {
        const origin = allowedWriteOrigin(request, env);
        if (!origin) return json({ error: "来源不允许" }, { status: 403 });
        return await handleExportEvent(request, env, origin);
      }

      return json({ error: "Not found" }, { status: 404 });
    } catch (error) {
      console.error("Statistics worker failure", error);
      return json({ error: "统计服务暂时不可用" }, { status: 500 });
    }
  }
};
