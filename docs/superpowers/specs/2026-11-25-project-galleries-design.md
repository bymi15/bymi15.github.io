# Project screenshot galleries — design

Date: 2026-11-25 · Size: small change · Status: approved by Brian

## Intent

Brian wants the old project screenshots (`public/img`, 70 PNGs, 26MB) to be
seen on the new site, without making the single page longer or heavier.

## Decisions (Brian's)

- **Approach A:** galleries on the existing project cards. A card keeps its one
  cover image; clicking it opens a full-screen viewer with the rest of that
  project's screenshots. Page length does not change.
- `kayoun*` images stay out (not on the site, not published).
- OTMEDU comes back as a "More projects" entry, from the old site data:
  "OTMEDU College Website", 2020.
- Dead links are removed: OTMEDU (Heroku 404), Coding Academy Platform
  (`topolar.co.kr`, no DNS), UCL Korean Society Forum (`uclks.org`, no DNS).
  Those entries stay, listed without a link.

## Approaches considered

- **A. Card galleries (picked).** No added page length; uses the screenshots
  where the attention already is.
- B. Thumbnails in "More projects": shows off older work, but the list grows
  taller even when closed.
- C. Both: most visible, most page weight and layout.

## Design

- **Images move into `src/assets/projects/<prefix>/`** so Astro optimizes them
  (resized WebP at build). `public/img` is removed, so nothing full-size gets
  published. Image sets keep the old site's prefixes and order (`colormp1..4`,
  etc.; image 1 is the cover).
- **Data:** each project gets `gallery?: ImageMetadata[]` in
  `src/data/projects.ts`. Cards: Color (4), Flowverse (5), Uniworld (8), and
  react-edit-text, which gains a cover image and gallery (3).
  express-typeorm-rest-boilerplate has none and stays text-only.
- **"More projects" screenshots (Claude's call):** each row with a set gets a
  small "Screenshots" button beside the year that opens the same viewer. The
  closed list and the rows stay the same height, so it doesn't break "compact",
  and the older sets (NFTMarketFlow, Real Estate, Job Trackify, OTMEDU, etc.)
  get used too. Brian can drop this and keep A strictly to the cards.
- **Viewer:** one native `<dialog>`, filled when opened. Prev/next buttons, ←/→
  keys, Esc and backdrop click close it, a "2 / 5" counter, and focus returns to
  the trigger on close. Viewer images are loaded only when it opens, so the
  page's initial weight doesn't change.
- **Card cover:** clicking the image opens the gallery and shows a small "⊞ 4"
  badge. The title link still goes to the live project.
- **Without JS:** the cover links to the large version of image 1, so nothing
  is hidden and it still works. The viewer and "Screenshots" buttons are added
  only when JS runs. In print, the viewer is hidden and covers print as they do
  today.
- **Motion:** CSS fade/scale on open only, and none under
  `prefers-reduced-motion`. Colours: neutrals plus `--accent` only.

## Non-goals

No captions or descriptions written for screenshots (no invented content); alt
text stays generic ("Color screenshot 2 of 4") unless Brian supplies more. No
carousel on the page itself and no new dependencies.

## Settled

- `maplace.co` ("Maplace.co - Next Gen AD Platform") is still Brian's, so the
  link stays.

## Verification

`npx astro check`, `npm test`, then check in the browser: open, step through
and close the viewer with mouse and keyboard, check with JS off and with
reduced motion, check the mobile width, and compare the `dist/` size before and
after.
