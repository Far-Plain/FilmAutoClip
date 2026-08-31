PRAGMA foreign_keys = ON;

CREATE TABLE IF NOT EXISTS export_events (
  event_id TEXT PRIMARY KEY,
  device_hash TEXT NOT NULL,
  frame_count INTEGER NOT NULL CHECK (frame_count BETWEEN 1 AND 5000),
  client_created_at TEXT,
  app_version TEXT NOT NULL,
  received_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS anonymous_users (
  device_hash TEXT PRIMARY KEY,
  first_exported_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS stats_totals (
  id INTEGER PRIMARY KEY CHECK (id = 1),
  user_count INTEGER NOT NULL DEFAULT 0 CHECK (user_count >= 0),
  frame_count INTEGER NOT NULL DEFAULT 0 CHECK (frame_count >= 0),
  updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
);

INSERT OR IGNORE INTO stats_totals (id, user_count, frame_count)
VALUES (1, 0, 0);

CREATE INDEX IF NOT EXISTS export_events_received_at
ON export_events(received_at);

CREATE INDEX IF NOT EXISTS export_events_device_hash
ON export_events(device_hash);
