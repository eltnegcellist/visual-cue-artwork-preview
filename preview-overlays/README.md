# Preview composition

The normal app is packaged from source commit 338816d3459619a2bc8c38c531f974f5e69fb47e.
It additionally preserves the preview-only progressive voice implementation published in cb9f065 (PR #127).
`progressive-voice.patch` records that existing overlay against Pages commit 1ee7d43.

Reproduction: package source 338816d; copy prerecorded-voice.js and tts-worker.js from cb9f065; three-way merge app.js with base 1ee7d43 and cb9f065. Resolve only the two service-worker version query conflicts to 20261020-english-illustrations-progressive-v3. Keep the source index/settings and SW shell additions, update app entry query to the same v3 version, voice SW preload query to progressive-voice-preview-v1, and shell cache to v154-english-illustrations-progressive. Preserve VOICE_PROGRESSIVE_TEST_DEPLOYED.json.

`deployment.json.previewOverlays` records the composed file hashes. These files intentionally differ from the canonical source package. No main branch was changed or merged.
