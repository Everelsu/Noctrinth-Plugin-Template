# Noctrinth Plugin Template

Official starter template for building plugins for **Noctrinth** (themes, sandboxed Web Worker extensions, and content sources).

## Quick Start

1. Click **Use this template** on GitHub to create your plugin repository.
2. Edit `plugin.json` with your unique `id`, `name`, `author`, and `description`.
3. Add your styles in `theme.css` (for `type: "theme"`) or Worker script in `index.js` (for `type: "extension"`).
4. To test locally, zip the folder and open **Settings → Plugins → Install from .zip** in Noctrinth.

## Project Structure

- `plugin.json` — Plugin manifest validated against `plugin-schema.json` (`apiVersion: 1`).
- `theme.css` — Starter CSS theme (applied and toggled live without restarting).
- `index.js` — Starter extension running inside an isolated Web Worker (`noctrinth.fetch`, `noctrinth.storage`, `noctrinth.on`, `noctrinth.log`).
- `sdk/index.d.ts` — TypeScript definitions for editor autocomplete.
- `plugin-schema.json` — JSON Schema for manifest validation.

## Submitting to the Official Catalog

1. Fork [Everelsu/Noctrinth-Plugins](https://github.com/Everelsu/Noctrinth-Plugins).
2. Add your repository as a commit-pinned git submodule inside `plugins/`:
   ```bash
   git submodule add https://github.com/<you>/<your-plugin> plugins/<your-plugin-id>
   git commit -m "feat: add <your-plugin-id>"
   ```
3. Open a Pull Request. Once merged, GitHub Actions validates `plugin.json`, builds the `.zip`, computes its SHA-256 checksum, and publishes it to the launcher catalog and website.
