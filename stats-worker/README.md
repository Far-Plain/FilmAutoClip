# FILM / FRAME statistics worker

The Worker counts an anonymous browser device when it opens the page and counts frames only after a successful export. Device UUIDs are salted and hashed before storage; image and file information never reaches this service.

After pulling an update, apply pending D1 migrations before deploying:

```powershell
npm run db:migrate:remote
npm run deploy
```

The public endpoints are:

- `GET /api/stats` — read global totals.
- `POST /api/events/visit` — idempotently register an anonymous browser device.
- `POST /api/events/export` — idempotently add successfully exported frames.
