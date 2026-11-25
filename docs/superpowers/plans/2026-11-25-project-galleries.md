# Project Screenshot Galleries Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Show each project's old screenshots in a full-screen viewer opened from its card cover or its "More projects" row, without making the page longer or heavier.

**Architecture:** The screenshots move from `public/img` into `src/assets/projects/<prefix>/` and are loaded with `import.meta.glob`, so Astro builds them into resized WebP. `Projects.astro` renders each trigger as a real link to the large first image (this works without JS) and gives it a `data-gallery` JSON list of image URLs. A new `Gallery.astro` holds one `<dialog>` and a small script that takes over those clicks and creates the `<img>`s only when the viewer opens.

**Tech Stack:** Astro 7 (`astro:assets` `getImage`), TypeScript, plain CSS, native `<dialog>`. No new dependencies.

**Spec:** `docs/superpowers/specs/2026-11-25-project-galleries-design.md`

## Global Constraints

- No email address anywhere in the repo or `dist/` (`npm test` enforces this, including `docs/`).
- No unit tests unless absolutely necessary. Check behaviour in the browser instead. This overrides the TDD steps of the default template.
- No invented content. Titles, years and descriptions come from Brian or the old site data. Alt text is generic: `"<Title> screenshot <i> of <n>"`.
- Motion is CSS only, there is none under `prefers-reduced-motion`, and content is never hidden when JS is off or when printing.
- Colours: the site's neutrals (`--bg --fg --muted --border --card --chip`) plus `--accent` only.
- `kayoun*` images are not published. `public/headshot.jpeg` stays as it is (a separate open question).
- Don't merge or push.

## Review Focus

1. **Phone width (375px):** the viewer image fits inside the viewport, with no horizontal scroll. Prev, next and close are at least 44px tap targets.
2. **Keyboard:** ←/→ only act while the viewer is open, Esc closes it, and focus returns to the link that opened it.
3. **Ends of the set:** next on the last image wraps to the first, and prev on the first wraps to the last. The counter stays correct.
4. **JS off:** a cover or "Screenshots" link opens the large first image as a normal page, and nothing on the page is hidden.
5. **Page weight:** first load fetches no viewer images (check the Network tab), and `dist/` is well under today's 31MB.

Each item is a check in Task 3, step 3.

---

### Task 1: Move images into assets and wire up the data

**Files:**
- Move: `public/img/<prefix>N.png` → `src/assets/projects/<prefix>/<prefix>N.png` (git mv), for these prefixes: `colormp flowversenft uniworld react-edit-text nftmarketflow property jobtrackify otmedu tocol uclks nhs ecom maplace musicTV copter`
- Delete: `public/img/kayoun1..7.png`, the now-empty `public/img/`, and the three old single files `src/assets/projects/{colormp1,flowversenft1,uniworld1}.png` (identical to the moved copies)
- Modify: `src/data/projects.ts`
- Modify: `src/components/Projects.astro` (only so it compiles against the new type)

**Interfaces:**
- Produces, in `src/data/projects.ts`:
  - `type Shot = ImageMetadata`
  - `function shots(prefix: string): Shot[]` returns the images in `../assets/projects/<prefix>/`, sorted by their trailing number (so `uniworld10` would come after `uniworld9`). It throws at build time if there are none.
  - `Project` = `{ title; description; tags; url; gallery?: Shot[]; imageAlt?: string; featured?; extraLink? }`. The `image` field is removed: the cover is `gallery[0]`.
  - `MoreProject` = `{ title: string; year: number; url?: string; gallery?: Shot[] }`

- [ ] **Step 1: Move the files.** `git mv` each set as listed, then `git rm` the kayoun images and the three old single files. Check that `ls public/img` fails and that `src/assets/projects/` holds 15 folders.
- [ ] **Step 2: Implement `shots()`** using `import.meta.glob<{ default: ImageMetadata }>("../assets/projects/*/*.png", { eager: true })`, matching on the folder name.
- [ ] **Step 3: Update the data.**
  - Cards: Color `shots("colormp")`, Flowverse `shots("flowversenft")`, Uniworld `shots("uniworld")`, react-edit-text `shots("react-edit-text")` with `imageAlt: "react-edit-text demo"`. express-typeorm has no gallery. Keep the existing `imageAlt` values.
  - More projects: add `gallery` to every entry (NFTMarketFlow `nftmarketflow`, Real Estate `property`, Job Trackify `jobtrackify`, Coding Academy `tocol`, UCL KS `uclks`, NHS `nhs`, E-Commerce `ecom`, Maplace `maplace`, Music TV `musicTV`, Helicopter `copter`).
  - Insert `{ title: "OTMEDU College Website", year: 2020, gallery: shots("otmedu") }` straight after Job Trackify (old dates: Job Trackify 2020-09-28, OTMEDU 2020-07-27).
  - Remove the `url` from Coding Academy Platform (`topolar.co.kr`) and UCL Korean Society Forum (`uclks.org`). Both links are dead.
- [ ] **Step 4: Update `Projects.astro`** to use `p.gallery?.[0]` wherever it used `p.image` (with the same `<Image>` widths and sizes). Nothing else changes in this task.
- [ ] **Step 5: Verify.** Run `npx astro check` (expect 0 errors) and `npm test` (build passes, 1/1). Then run `du -sh dist` and expect it to be far below 31M. At `localhost:4321`, the four cards show covers, react-edit-text now has one, and "More projects" lists 11 entries, with OTMEDU, Coding Academy and UCL KS shown without links.
- [ ] **Step 6: Commit**

```bash
git add -A src/assets/projects public/img src/data/projects.ts src/components/Projects.astro \
  docs/superpowers/specs/2026-11-25-project-galleries-design.md docs/superpowers/plans/2026-11-25-project-galleries.md
git commit -m "content: move project screenshots into assets, add OTMEDU, drop dead links"  # plus the Co-Authored-By trailer
```

### Task 2: Gallery triggers on cards and "More projects" rows

**Files:**
- Modify: `src/components/Projects.astro`

**Interfaces:**
- Consumes: `Project.gallery`, `MoreProject.gallery` and `shots()` output from Task 1.
- Produces: trigger elements that Task 3's script finds:
  `<a href={large[0]} data-gallery={JSON.stringify(GalleryItem[])} data-gallery-title={title}>`,
  where `type GalleryItem = { src: string; srcset: string; alt: string }`.

- [ ] **Step 1: Build the items at build time.** In the frontmatter, write `async function galleryItems(title: string, g: Shot[]): Promise<GalleryItem[]>`. For each image it calls `getImage({ src, widths: [960, 1600], format: "webp" })` and returns `{ src: img.src, srcset: img.srcSet.attribute, alt: \`${title} screenshot ${i + 1} of ${g.length}\` }`. The fallback `href` for each trigger is `(await getImage({ src: g[0], width: 1600, format: "webp" })).src`.
- [ ] **Step 2: Cover link.** The `.thumb` anchor becomes the trigger. Its `href` is the large first image, it carries the data attributes, and it no longer links to the project. Drop `tabindex="-1"`/`aria-hidden` and add `aria-label="View <n> screenshots of <Title>"`, because it's now a real control. Add an overlaid badge in the bottom-right corner reading `⊞ <n>`, in `--card` with a `--border` outline. Cards without a gallery stay as they are.
- [ ] **Step 3: "More projects" rows.** Put a small `Screenshots` link before the year, with the same `href`/data attributes and `aria-label="Screenshots of <Title>"`, styled like `.extra` at 0.8125rem. The rows must stay the same height. (This is a refinement of the spec: it's a link rather than a JS-only button, so it also works without JS. It still hides nothing.)
- [ ] **Step 4: Verify.** Run `npx astro check` (0 errors). In the browser with JS on, the links still navigate to the large image (Task 3 hasn't landed). Card and row heights match before/after at 375px and 1280px.
- [ ] **Step 5: Commit** with `feat: screenshot links on project cards and rows` plus the co-author line.

### Task 3: The viewer

**Files:**
- Create: `src/components/Gallery.astro`
- Modify: `src/components/Projects.astro` (render `<Gallery />` once, at the end of the section)

**Interfaces:**
- Consumes: `[data-gallery]` triggers and `GalleryItem` from Task 2.

- [ ] **Step 1: Markup and CSS.**
  - Markup: `<dialog class="gallery" aria-label="Screenshots">` containing a title (`h2`, filled from `data-gallery-title`), a `<figure>` holding one `<img>`, the counter text `"2 / 5"` (`aria-live="polite"`), and Prev, Next and Close buttons with `aria-label`s and the existing `Icon` arrows (or the text ‹ › ×). Close is also a `<form method="dialog">` button, so Esc and the button work natively.
  - CSS: the backdrop is `color-mix(in srgb, var(--bg) 85%, transparent)`, and the panel uses `--card`/`--border`/`--radius`. The image is `max-width: 100%; max-height: calc(100dvh - 10rem); object-fit: contain`.
  - The open animation (opacity plus `scale(.98)` → 1, 150ms) sits inside `@media (prefers-reduced-motion: no-preference)`.
  - `@media print { .gallery { display: none } }`.
- [ ] **Step 2: Script.** One `<script>`:
  - It delegates clicks on `[data-gallery]`. It calls `preventDefault`, parses the items, remembers the trigger and opens at index 0 with `showModal()`.
  - `show(i)` wraps with `(i + n) % n` and sets the img `src`/`srcset`/`sizes="(min-width: 1100px) 1000px, 100vw"`/`alt` and the counter. It only ever creates the one `<img>`.
  - `keydown` ←/→ is attached to the dialog, so it only acts while the viewer is open. A click on the dialog element itself (the backdrop) closes it.
  - On `close`, it clears the img `src` and focuses the remembered trigger.
- [ ] **Step 3: Verify in the browser** (`npx astro dev --port 4321`; reuse the server if it's already up):
  - Mouse: open Color, step through all 4 both ways (wraps at the ends), then close with ×, with the backdrop and with Esc.
  - Keyboard only: Tab to a cover, Enter, ←/→, Esc. Focus is back on the cover afterwards.
  - A "More projects" row opens its own set with the right title.
  - Light and dark themes both look on-palette.
  - At 375px width: the image fits, there's no horizontal scroll, and the buttons are at least 44px.
  - With reduced motion emulated, there's no animation.
  - With JS disabled, the links open the large image.
  - Print preview shows no viewer.
  - The Network tab on first load shows no viewer images.
- [ ] **Step 4: Run `npx astro check` and `npm test`** (0 errors, 1/1), and record `du -sh dist`.
- [ ] **Step 5: Commit** with `feat: full-screen screenshot viewer for projects` plus the co-author line.
