# Independent physics machines

This is a **new physics implementation**, not a remix of the original nine WASM machines.

## Machines
- **Pendulum Crusher** (\`pendulum\`): pivoted weighted hammer, moving collision surface, particle splitting.
- **Twin Gear Grinder** (\`gears\`): two opposite-rotation toothed gears, collision response and central crushing gap.
- **Magnetic Vortex** (\`magnet\`): orbiting attractors, magnetic force field, central crushing core.

The physics runs deterministically at 60 fixed steps/second. The encoder outputs 30 FPS at 720 × 1280 or 1080 × 1920.

## Architecture
- \`new-machines-physics.js\`: portable simulation and 2D canvas drawing; used by both live preview and video worker.
- \`independent-machines.html\`: responsive editor and machine selection.
- \`independent-machines-ui.js\`: controls, live playback, browser sound, export button, progress, downloads, cancel.
- \`new-machines-export.worker.js\`: independent WebCodecs H.264 export with OffscreenCanvas and custom ISO-BMFF MP4 muxing; attempts AAC audio when supported.
- \`creator-machines-cta.js\`: links from homepage and old Lab; adds three links under the original Machine chooser.
- \`vercel.json\`: rewrites \`/machines\` to \`/independent-machines.html\`.

## Running
Open \`/machines\`. Clicking a new Machine card in the original Lab performs a **full navigation to the independent machine lab**; it does not pass the new machine ID to the original WASM engine, because the compiled WASM only recognizes the original nine types.

Use a secure-context, modern Chromium-based browser for best WebCodecs support. If H.264 or OffscreenCanvas is unavailable, export explains the browser limitation. Export is limited to 30 seconds to bound browser memory use.

## Tests
Run:

\`\`\`bash
node --test tests/new-machines.test.cjs
\`\`\`

The tests cover deterministic mechanics, sustained collisions over 30 seconds, bounded bodies, no invalid numeric coordinates, Canvas 2D draw method use, and MP4 box layout.

**Limitations:** A complete, real-browser MP4 encode and decode smoke test is still required. The muxer tests verify box structure, not playback codec compatibility. AAC may not be supported on every device, in which case the worker exports the video without audio and reports this. Original lab settings and renderer are separate.

## Release safety
Develop and validate on \`remove-auth-guest-mode\`. Do not publish to production without explicit approval. The original WASM simulation and its WebCodecs export worker remain unmodified by the new machine work.
