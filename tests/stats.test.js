const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const { webcrypto } = require("node:crypto");

function makeElement() {
  return {
    hidden: true,
    dataset: {},
    textContent: "",
    attributes: {},
    setAttribute(name, value) { this.attributes[name] = value; }
  };
}

async function main() {
  const storage = new Map();
  const elements = new Map([
    ["#communityStats", makeElement()],
    ["#communityStatsSummary", makeElement()],
    ["#communityUserCount", makeElement()],
    ["#communityFrameCount", makeElement()],
    ["#communityStatsStatus", makeElement()]
  ]);
  const requests = [];
  const registeredDevices = new Set();
  let users = 8;
  let frames = 120;
  let offline = false;

  const sandbox = {
    console: { ...console, warn() {} },
    AbortController,
    Date,
    Intl,
    JSON,
    Math,
    Number,
    Promise,
    Uint8Array,
    clearTimeout,
    setTimeout,
    crypto: webcrypto,
    FILM_FRAME_STATS: {
      apiBaseUrl: "https://stats.example.test/",
      appVersion: "2.4.0"
    },
    localStorage: {
      getItem(key) { return storage.get(key) || null; },
      setItem(key, value) { storage.set(key, String(value)); }
    },
    addEventListener() {},
    document: {
      readyState: "loading",
      visibilityState: "visible",
      querySelector(selector) { return elements.get(selector) || null; },
      addEventListener() {}
    },
    async fetch(url, options = {}) {
      if (offline) throw new Error("offline");
      requests.push({ url, options });
      if (options.method === "POST") {
        const event = JSON.parse(options.body);
        let accepted = true;
        if (url.endsWith("/api/events/visit")) {
          accepted = !registeredDevices.has(event.device_id);
          if (accepted) {
            registeredDevices.add(event.device_id);
            users += 1;
          }
        } else {
          frames += event.frame_count;
        }
        return {
          ok: true,
          status: 200,
          async json() { return { accepted, stats: { users, frames } }; }
        };
      }
      return {
        ok: true,
        status: 200,
        async json() { return { users, frames }; }
      };
    }
  };
  sandbox.window = sandbox;
  sandbox.globalThis = sandbox;

  const source = fs.readFileSync(path.join(__dirname, "..", "stats.js"), "utf8");
  vm.runInNewContext(source, sandbox, { filename: "stats.js" });
  const stats = sandbox.filmFrameStats;

  assert.ok(stats, "statistics API should be exposed to the application");
  assert.equal(await stats.registerVisit(), true, "opening the page should register an anonymous device");
  const visitRequest = requests[0];
  const visitEvent = JSON.parse(visitRequest.options.body);
  assert.match(visitRequest.url, /\/api\/events\/visit$/);
  assert.match(visitEvent.device_id, /^[0-9a-f-]{36}$/i);
  assert.equal(visitEvent.app_version, "2.4.0");
  assert.equal(await stats.registerVisit(), true, "the same page session should reuse its acknowledgement");
  assert.equal(requests.length, 1, "an acknowledged page session should not send duplicate visits");

  assert.equal(await stats.recordExport(4), true, "successful events should be delivered");
  assert.equal(stats.getPendingCount(), 0, "delivered events should leave the retry queue");

  const firstEvent = JSON.parse(requests[1].options.body);
  assert.equal(firstEvent.frame_count, 4, "only the successful exported frame count should be sent");
  assert.equal(firstEvent.app_version, "2.4.0", "events should include the application version");
  assert.match(firstEvent.device_id, /^[0-9a-f-]{36}$/i, "events should contain an anonymous UUID");

  await stats.recordExport(2);
  const secondEvent = JSON.parse(requests[2].options.body);
  assert.equal(secondEvent.device_id, firstEvent.device_id, "one browser should keep one anonymous identity");
  assert.notEqual(secondEvent.event_id, firstEvent.event_id, "each export should have an idempotency key");

  offline = true;
  assert.equal(await stats.recordExport(3), false, "offline delivery should fail without blocking the export");
  assert.equal(stats.getPendingCount(), 1, "offline events should remain queued");
  offline = false;
  assert.equal(await stats.flushPending(), true, "queued events should retry after connectivity returns");
  assert.equal(stats.getPendingCount(), 0, "retried events should be removed only after acknowledgement");

  assert.equal(await stats.refresh(), true, "global counters should load from the shared service");
  assert.equal(elements.get("#communityUserCount").textContent, "9");
  assert.equal(elements.get("#communityFrameCount").textContent, "129");
  assert.equal(await stats.recordExport(0), false, "empty exports must never be counted");

  const requestCountBeforeLargeExport = requests.length;
  assert.equal(await stats.recordExport(5001), true, "large exports should be delivered in valid chunks");
  const largeExportEvents = requests
    .slice(requestCountBeforeLargeExport)
    .filter((request) => request.options.method === "POST")
    .map((request) => JSON.parse(request.options.body));
  assert.deepEqual(largeExportEvents.map((event) => event.frame_count), [5000, 1]);

  stats.init();
  assert.equal(elements.get("#communityStats").hidden, false, "configured statistics should be visible");
  console.log("Statistics client: page-open registration, retry queue and global counters — OK");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
