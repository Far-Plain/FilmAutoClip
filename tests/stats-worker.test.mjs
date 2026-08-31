import assert from "node:assert/strict";
import {
  hashDeviceId,
  parseAllowedOrigins,
  validateEventPayload
} from "../stats-worker/src/index.js";
import worker from "../stats-worker/src/index.js";

const event = {
  event_id: "f1565d56-2138-4e52-a1f2-2ac730900f8a",
  device_id: "038da6f1-86ad-46ed-a88e-828bb8d7574f",
  frame_count: 36,
  created_at: "2026-08-31T12:00:00.000Z",
  app_version: "2.3.0"
};

assert.equal(validateEventPayload(event), "", "a valid anonymous export event should pass");
assert.match(validateEventPayload({ ...event, frame_count: 0 }), /frame_count/);
assert.match(validateEventPayload({ ...event, device_id: "person@example.com" }), /device_id/);
assert.match(validateEventPayload({ ...event, app_version: "<script>" }), /app_version/);

const origins = parseAllowedOrigins("http://localhost:8080, https://example.com/");
assert.deepEqual(Array.from(origins), ["http://localhost:8080", "https://example.com"]);

const salt = "test-only-secret-salt";
const firstHash = await hashDeviceId(event.device_id, salt);
const secondHash = await hashDeviceId(event.device_id, salt);
assert.equal(firstHash, secondHash, "one anonymous device should hash consistently");
assert.equal(firstHash.length, 64, "the database identity should be a SHA-256 digest");
assert.notEqual(firstHash, event.device_id, "the raw device UUID must not be stored");
await assert.rejects(() => hashDeviceId(event.device_id, "short"), /DEVICE_HASH_SALT/);

class FakeStatement {
  constructor(database, sql) {
    this.database = database;
    this.sql = sql;
    this.params = [];
  }

  bind(...params) {
    this.params = params;
    return this;
  }

  async first() {
    return {
      users: this.database.users.size,
      frames: Array.from(this.database.events.values()).reduce((sum, item) => sum + item.frameCount, 0),
      updated_at: "2026-08-31 12:00:00"
    };
  }
}

class FakeD1 {
  constructor() {
    this.events = new Map();
    this.users = new Set();
  }

  prepare(sql) {
    return new FakeStatement(this, sql.replace(/\s+/g, " ").trim());
  }

  async batch(statements) {
    return statements.map((statement) => {
      if (statement.sql.includes("INSERT OR IGNORE INTO export_events")) {
        const [eventId, deviceHash, frameCount] = statement.params;
        if (this.events.has(eventId)) return { meta: { changes: 0 } };
        this.events.set(eventId, { deviceHash, frameCount });
        return { meta: { changes: 1 } };
      }
      if (statement.sql.includes("INSERT OR IGNORE INTO anonymous_users")) {
        const [deviceHash, eventId] = statement.params;
        const storedEvent = this.events.get(eventId);
        if (storedEvent?.deviceHash === deviceHash) this.users.add(deviceHash);
        return { meta: { changes: 1 } };
      }
      if (statement.sql.includes("UPDATE stats_totals")) return { meta: { changes: 1 } };
      throw new Error(`Unexpected statement: ${statement.sql}`);
    });
  }
}

const database = new FakeD1();
const env = {
  ALLOWED_ORIGINS: "https://film.example.com",
  DEVICE_HASH_SALT: "integration-test-secret-salt",
  DB: database
};

async function postExport(payload, origin = "https://film.example.com") {
  return worker.fetch(new Request("https://stats.example.com/api/events/export", {
    method: "POST",
    headers: { "Content-Type": "application/json", Origin: origin },
    body: JSON.stringify(payload)
  }), env);
}

const firstResponse = await postExport(event);
const firstResult = await firstResponse.json();
assert.equal(firstResponse.status, 200);
assert.equal(firstResult.accepted, true);
assert.deepEqual(firstResult.stats, { users: 1, frames: 36, updated_at: "2026-08-31 12:00:00" });

const duplicateResponse = await postExport(event);
const duplicateResult = await duplicateResponse.json();
assert.equal(duplicateResult.accepted, false, "retrying the same UUID must not count twice");
assert.deepEqual(duplicateResult.stats, firstResult.stats);

const nextResponse = await postExport({
  ...event,
  event_id: "418b04e1-49ec-454d-963f-2c40bb80b09d",
  frame_count: 4
});
const nextResult = await nextResponse.json();
assert.deepEqual(nextResult.stats, { users: 1, frames: 40, updated_at: "2026-08-31 12:00:00" });

const forbiddenResponse = await postExport(event, "https://attacker.example");
assert.equal(forbiddenResponse.status, 403, "unconfigured browser origins should be rejected");

const totalsResponse = await worker.fetch(new Request("https://stats.example.com/api/stats"), env);
assert.deepEqual(await totalsResponse.json(), nextResult.stats, "all devices should read the same totals");

console.log("Statistics worker: validation, salted identity and idempotent global totals — OK");
