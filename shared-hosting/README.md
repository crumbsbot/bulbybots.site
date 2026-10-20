# Shared-hosting deployment

This directory is an independent PHP-compatible runtime for the BulbyBots homepage. It is designed for the subdomain `bulbybots.crumbs.host` and does not change the Cloudflare Worker serving `bulbybots.site`.

## Contents

- `shared-hosting/index.php` — homepage, legal routes, and the `/api/pct` and `/api/migrations` proxy endpoints.
- `shared-hosting/.htaccess` — routes application paths to PHP while allowing existing files through.
- `.github/workflows/deploy-shared-hosting.yml` — manual FTP deployment workflow.

## Before deploying

1. Confirm PHP 8.2+ and the PHP cURL extension are enabled on the shared host.
2. In GitHub repository Settings → Secrets and variables → Actions, add:
   - `FTP_SERVER` — hosting FTP hostname.
   - `FTP_USERNAME` — FTP username.
   - `FTP_PASSWORD` — FTP password.
   - `FTP_SERVER_DIR` — the FTP-visible destination directory for the `bulbybots.crumbs.host` document root, with a trailing slash.
3. Merge this change to `main`.
4. Open Actions → **Deploy shared-hosting version** → **Run workflow**.

The workflow is manual by design and does not automatically publish on every push. It uploads only the `shared-hosting/` directory and does not clean the destination, so it won't delete unrelated hosting files. The FTP destination must be confirmed before running it.

## Routes

- `/` and `/index.html` — homepage
- `/api/pct` — PCT overview proxy
- `/api/migrations` — migration API proxy (query string preserved)
- `/reddit-apps/terms`, `/reddit-apps/privacy`, `/pi-market/terms`, `/pi-market/privacy` — legal pages

This is a PHP port of the existing Worker routes. It uses the same external data endpoints and shared header script, but runs on the shared host independently. Test the rendered homepage, both API routes, legal pages, and mobile layout after first deployment.
