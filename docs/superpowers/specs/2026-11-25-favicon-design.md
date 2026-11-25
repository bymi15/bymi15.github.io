# Favicon refresh — design

Date: 2026-11-25 · Size: small change · Status: approved by Brian (preview seen)

## Intent

Brian's ask: "modernise it, change the font, make it look cleaner and better". The
old icon is a script "B" on a bright blue circle (about `#2288d4`), which doesn't
match the site's palette, has no SVG version and has no dark variant.

## Design (approved)

- A geometric sans "B" drawn as a stroked path (so no font dependency), on a
  rounded-square tile (`rx` 7 of 32).
- Light: tile `#0b63c1` (`--accent`), mark `#ffffff`. Dark (via
  `prefers-color-scheme` inside the SVG): tile `#6cb2ff`, mark `#0e0f12`, both the
  site's dark-theme tokens.
- Files: new `public/favicon.svg` (primary); `favicon.ico` (16+32) and
  `apple-touch-icon.png` (180, full-bleed square because iOS rounds it) are
  regenerated from it in light colours. `favicon-16x16.png`, `favicon-32x32.png`,
  `android-chrome-192x192.png` and `android-chrome-512x512.png` are removed
  (the android files are linked from nowhere, and the SVG replaces the others).
- `Base.astro` head: `favicon.ico` (`sizes="any"`), `favicon.svg`
  (`type="image/svg+xml"`), `apple-touch-icon.png`.
- PNGs are rendered once with `sharp` (already installed by Astro) from a script
  kept outside the repo. No new dependencies.

## Approaches considered

- **Single sans "B" tile (picked):** readable at 16px and on-palette.
- "BM" monogram: too cramped at 16px.
- A mark taken from the "figure 1" hero: the detail can't be read at tab size.

## Verification

`npx astro check`, `npm test`, then check in the browser that the tab shows the
new icon and that the served `/favicon.svg`, `/favicon.ico` and
`/apple-touch-icon.png` each return 200 with the right type.
