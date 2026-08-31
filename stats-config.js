/*
 * Community statistics are enabled by default.
 * Deploy stats-worker, then paste its public origin below to sync global totals.
 * Example: "https://film-frame-stats.example.workers.dev"
 * While empty, the counter stays visible in a waiting state and export events
 * remain queued locally without affecting cropping.
 */
window.FILM_FRAME_STATS = Object.freeze({
  enabled: true,
  apiBaseUrl: "https://film-frame-stats.far-plain.workers.dev",
  appVersion: "2.4.0"
});
