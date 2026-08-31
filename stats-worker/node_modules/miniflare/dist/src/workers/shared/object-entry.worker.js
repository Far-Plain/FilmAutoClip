// src/workers/shared/constants.ts
var SharedBindings = {
  TEXT_NAMESPACE: "MINIFLARE_NAMESPACE",
  DURABLE_OBJECT_NAMESPACE_OBJECT: "MINIFLARE_OBJECT",
  MAYBE_SERVICE_BLOBS: "MINIFLARE_BLOBS",
  MAYBE_SERVICE_LOOPBACK: "MINIFLARE_LOOPBACK",
  MAYBE_JSON_ENABLE_CONTROL_ENDPOINTS: "MINIFLARE_ENABLE_CONTROL_ENDPOINTS"
};

// src/workers/shared/object-entry.worker.ts
var object_entry_worker_default = {
  async fetch(request, env, ctx) {
    let name = ctx.props[SharedBindings.TEXT_NAMESPACE] ?? env[SharedBindings.TEXT_NAMESPACE];
    if (name === void 0)
      throw new Error(
        "object-entry worker: no namespace provided via props or binding"
      );
    let objectNamespace = env[SharedBindings.DURABLE_OBJECT_NAMESPACE_OBJECT], id = objectNamespace.idFromName(name), stub = objectNamespace.get(id), cf = { miniflare: { name } };
    return await stub.fetch(request, { cf });
  }
};
export {
  object_entry_worker_default as default
};
//# sourceMappingURL=object-entry.worker.js.map
