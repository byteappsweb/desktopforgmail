# Prototype Instructions

## Product direction

- The selected visual target is the bright, editorial Option 1: a crisp white Mac landing page with centered product messaging and layered native app windows.
- Use the user-supplied red mail AppIcon as the only website brand icon, including navigation and favicon.
- Website imagery must use sanitized demo content; never publish screenshots containing real inbox data or account details.
- Keep product copy concise and concrete: multiple Gmail accounts, Google apps in one window, attachment/download management, print or save PDF, light/dark modes, app lock, and menu bar access.

Run the local server yourself and open the preview in the browser available to this environment. Do not give the user server-start instructions when you can run it.

Before making substantial visual changes, use the Product Design plugin's `get-context` skill when the visual source is unclear or no longer matches the current goal. When the user gives durable prototype-specific design feedback, preferences, or decisions, record them in `AGENTS.md`.

When implementing from a selected generated mock, treat that image as the source of truth for layout, component anatomy, density, spacing, color, typography, visible content, and hierarchy.

Build app UI in `src/`. Keep `.openai/hosting.json`, `worker/index.js`, `scripts/prepare-sites-build.mjs`, and `tests/sites-worker.test.mjs` intact so the same local prototype can be handed to Sites. Before a Sites handoff, run `npm run build` and `npm run test:sites`; the build must leave `dist/client/index.html`, `dist/server/index.js`, and `dist/.openai/hosting.json`.
