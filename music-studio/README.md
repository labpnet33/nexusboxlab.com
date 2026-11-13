# Zigzag Beat Machine (development prototype)

Branch: `feature/zigzag-beat-machine`

## What is implemented
- Standalone browser page at `music-studio/index.html` (no existing app files modified).
- Local audio upload and browser-side audio decoding.
- Approximate onset-energy event detection with fallback timing.
- Three seeded, independent zigzag paths and moving neon objects.
- Neon trails, corner-impact particles, and glow.
- Audio-synchronized preview with 30-second timeline.
- 1080x1920 canvas drawing buffer (preview scales down to fit display).

## Important limitations
- This is an initial browser prototype, **not** a completed production video generator.
- Onset peaks are not guaranteed to equal musical beats. A librosa/Essentia worker, BPM estimation, beat-grid correction, and user adjustment are needed.
- Video export, MP4 encoding, rendering queue, retry, and file verification are **not yet implemented**.
- The prototype has no Spotify/YouTube audio download; those services require licensed audio access.
- If the selected track has less than 30 seconds remaining, the visual timeline continues after the audio ends. Production should enforce duration and ending behavior.
- Actual mobile/desktop testing and deployment validation are pending.

## Testing
Serve the repository directory with any static HTTP server and open `/music-studio/`. Upload an MP3/WAV, click Analyze, then Play. This is a separate route; existing machine pages are unchanged.

## Next milestones
1. Add a proper beat-analysis worker and deterministic beat-grid format.
2. Add robust timing corrections, path choreography, and effect presets.
3. Add frame-by-frame export with a backend encoder, audio muxing, and verification.
4. Integrate navigation in the existing site only after identifying its deployed entrypoint and testing.
5. Run desktop and Android regression checks on a preview deployment. Never deploy to production without approval.
