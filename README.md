# bulbybots.site

Cloudflare Worker homepage for the BulbyBots project directory.

## Deployment
Connect this repository to Cloudflare Workers Builds for the Worker named `bulbybots-site`.

- Build command: `npm install`
- Deploy command: `npm run deploy`

This is a lightweight single-file Worker; no Vite/React build is required.

## Routes
- `/` — project directory homepage
- `/api/pct` and `/api/migrations` — data proxy routes (upstream API configuration must be validated before relying on their figures).

Project links: [PCT Funds](https://pct-funds.bulbybots.site/) · [Migration Insight](https://migrations.bulbybots.site/)
