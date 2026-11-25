# brianmin.com Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the CRA/Go/Netlify portfolio with a single-page Astro static site, deployed to GitHub Pages at brianmin.com.

**Architecture:** One Astro page (`src/pages/index.astro`) composed of section components, each rendering a typed data file from `src/data/`. Plain CSS with custom properties for theming; the only client JS is the theme toggle, the scroll fade-in, and nothing else. Tests run against the built HTML in `dist/` (vitest + node-html-parser), plus unit tests on the data files.

**Tech Stack:** Astro 5 (latest), TypeScript (strict), plain CSS, vitest, node-html-parser, GitHub Actions (`withastro/action` + `actions/deploy-pages`).

**Spec:** `docs/superpowers/specs/2026-11-25-portfolio-redesign-design.md`

## Global Constraints

- No email address anywhere in the site or its source — the old `config.EMAIL` address and any other email address must not appear in `src/`, `public/` (text files), or `dist/`.
- Contact form posts to `https://formspree.io/mrgyvnnj`.
- Resume link is exactly `/storage/BrianMin_Resume.pdf`.
- LinkedIn `https://www.linkedin.com/in/bymi15/`, GitHub `https://github.com/bymi15`.
- `public/CNAME` stays, containing `brianmin.com`.
- No typing animations, parallax, or skill-percentage bars. Motion only as a subtle fade-in, disabled under `prefers-reduced-motion`.
- No invented content: copy comes from `src/data/*.json` (old) or the spec. Copy may be shortened, facts unchanged.
- Light + dark mode following OS, with a toggle. Max content width 960px.
- Work stays on the `redesign` branch.

## Review Focus

1. **JS disabled / slow JS** — all content must be visible (fade-in must not hide content unless JS has added a class), and the form must still submit as a plain HTML POST. Test in Task 3 and Task 6.
2. **Theme flash and persistence** — a dark-OS visitor must not see a light flash; a chosen theme survives reload. Inline head script sets `data-theme` before paint. Test in Task 3.
3. **Narrow mobile (360px)** — nav must not overflow horizontally; nav links collapse to a horizontally-scrollable row or hide behind the section anchors. Checked in Task 8 with a browser at 360px.
4. **Email leakage via data or meta** — the no-email test scans `src/`, text files in `public/`, and `dist/`. Test in Task 1. (The resume PDF is binary and compressed; it cannot be scanned — Brian must confirm whether its email is acceptable.)
5. **External links** — every `target="_blank"` link has `rel="noopener noreferrer"`; old routes (`/about`, `/portfolio`, `/skills`, `/contact`) land on a 404 page that links home. Test in Task 6.

---

## File Structure

```
astro.config.mjs            site: https://brianmin.com
tsconfig.json               extends astro/tsconfigs/strict
vitest.config.ts
.github/workflows/deploy.yml
public/                     kept: CNAME, favicons, img/, storage/, robots.txt
                            removed: index.html, manifest.json
src/data/site.ts            name, title, pitch, location, links, formspree url
src/data/experience.ts      Experience[] (newest first) + earlier roles
src/data/projects.ts        featured Project[] + MoreProject[]
src/data/education.ts       Education[]
src/data/skills.ts          SkillGroup[]
src/layouts/Base.astro      <head> SEO/OG, theme script, nav, footer, global CSS
src/styles/global.css       tokens, reset, typography, utilities
src/components/Nav.astro
src/components/ThemeToggle.astro
src/components/Hero.astro
src/components/Experience.astro
src/components/Projects.astro
src/components/Skills.astro
src/components/Education.astro
src/components/Contact.astro
src/components/Footer.astro
src/components/Section.astro    <section id> + heading wrapper, fade-in hook
src/pages/index.astro
src/pages/404.astro
tests/no-email.test.ts
tests/data.test.ts
tests/page.test.ts          parses dist/index.html
tests/helpers.ts            loadPage(path) -> HTMLElement (node-html-parser)
```

Deleted: `src/` (all old JS/SCSS/vendor/assets/json), `functions/`, `db/`, `dashboard/`, `netlify.toml`, `Makefile`, `go.mod`, `go.sum`, `.env.example` (if present), `package-lock.json` (regenerated).

`npm test` = `astro build && vitest run`. Page tests read `dist/`, so the build always runs first.

---

### Task 1: Replace the old stack with an Astro skeleton

**Files:**
- Delete: everything listed under "Deleted" above
- Create: `package.json` (rewritten), `astro.config.mjs`, `tsconfig.json`, `vitest.config.ts`, `src/pages/index.astro` (placeholder `<h1>Brian Min</h1>`), `tests/helpers.ts`, `tests/no-email.test.ts`
- Modify: `.gitignore` (add `dist/`, `.astro/`; drop `/build`)

**Interfaces:**
- Produces: `loadPage(route: string): HTMLElement` in `tests/helpers.ts` — reads `dist/index.html` for `"/"`, `dist/404.html` for `"/404"`, parses with node-html-parser. `npm test` script.

- [ ] **Step 1: Delete old stack.** `git rm -r src functions db dashboard netlify.toml Makefile go.mod go.sum package-lock.json public/index.html public/manifest.json` (and `.env.example` if tracked). Keep `public/CNAME`, favicons, `public/img`, `public/storage`, `public/robots.txt`.
- [ ] **Step 2: New `package.json`** — name `brianmin.com`, `"type": "module"`, scripts `dev: astro dev`, `build: astro build`, `preview: astro preview`, `test: astro build && vitest run`. Install `astro` (latest), dev deps `vitest`, `node-html-parser`, `typescript`, `@astrojs/check`. `astro.config.mjs`: `site: "https://brianmin.com"`, no integrations.
- [ ] **Step 3: Write `tests/no-email.test.ts`**

```ts
// Walks src/, public/ (text extensions only: .astro .ts .css .html .txt .json .xml .svg .md), dist/ (same extensions), README.md
// For each file, assert content has no match for:
const EMAIL = /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/;
test("no email address in source or build output", () => {
  expect(offenders).toEqual([]); // offenders: list of "path: match"
});
```

- [ ] **Step 4: Write a placeholder page test in `tests/page.test.ts`:** `expect(loadPage("/").querySelector("h1")?.text).toBe("Brian Min")`.
- [ ] **Step 5: `npm install && npm test`** — Expected: build succeeds, 2 tests PASS. (If the no-email test flags something in `public/`, remove it — that is the point of the test.)
- [ ] **Step 6: Commit** — `git add -A && git commit -m "chore: replace CRA/Go stack with Astro skeleton"`

---

### Task 2: Typed content data

**Files:**
- Create: `src/data/site.ts`, `experience.ts`, `projects.ts`, `education.ts`, `skills.ts`
- Test: `tests/data.test.ts`

**Interfaces:**
- Produces (all `export const`, with exported types):

```ts
// site.ts
export const site: {
  name: "Brian Min"; title: string; pitch: string; location: "London, UK";
  description: string;            // meta description
  resumeUrl: "/storage/BrianMin_Resume.pdf";
  links: { linkedin: string; github: string };
  formspreeUrl: "https://formspree.io/mrgyvnnj";
};

// experience.ts
export type Role = { title: string; start: string; end: string; summary?: string };
export type Experience = { company: string; url?: string; location: string;
  start: string; end: string; roles: Role[] };   // roles newest first
export const experience: Experience[];           // Squarepoint, American Express, Flowverse
export type EarlierRole = { company: string; title: string; dates: string; line: string };
export const earlier: EarlierRole[];             // UCL, Topolar, ROK Marine Corps, Maplace

// projects.ts
export type Project = { title: string; description: string; tags: string[];
  url: string; image?: string; imageAlt?: string; featured?: boolean;
  extraLink?: { label: string; url: string } };
export const projects: Project[];                // Color (featured), Flowverse, Uniworld, react-edit-text, express-typeorm-rest-boilerplate
export type MoreProject = { title: string; year: number; url?: string };
export const moreProjects: MoreProject[];        // newest first

// education.ts
export type Education = { degree: string; institution: string; year: string; detail: string };
export const education: Education[];             // UCL first, then Bangkok Patana

// skills.ts
export type SkillGroup = { name: string; items: string[] };
export const skills: SkillGroup[];
```

Content (exact facts; descriptions may be tightened):
- **site.title** `"Lead Software Engineer at Squarepoint Capital"`; **pitch**: one sentence — builds data-heavy full-stack applications; previously event-driven microservices at American Express.
- **Squarepoint Capital** — Lead Software Engineer, `Sep 2025`–`Present`, London, UK — "Building data-heavy internal full-stack web applications."
- **American Express** — `Sep 2021`–`Sep 2025`, London, UK, roles: Senior Software Engineer `Nov 2024`–`Sep 2025` (old id 9 desc); Software Engineer `Jun 2022`–`Nov 2024` (old id 7 desc); Technology Graduate Engineer `Sep 2021`–`Jun 2022` (no summary — old desc is empty); Technology Summer Intern `Jul 2020`–`Aug 2020` (old id 4 desc, shortened).
- **Flowverse** — Technical Advisor & Lead Developer, `Mar 2023`–`Apr 2025`, Remote, url `https://nft.flowverse.co`, old id 8 desc in past tense.
- **earlier**: UCL Senior Programming Tutor (Sep 2020 – Mar 2021), Topolar Software Developer (Jul – Aug 2019), Republic of Korea Marine Corps Paratrooper (Aug 2017 – Apr 2019, one line: 21st Airborne Battalion, rifleman and squad leader), Maplace Web Developer (Oct 2016 – Jun 2017).
- **projects** from `src/data/projects.json` (git history: `git show HEAD~1:src/data/projects.json`): Color → `/img/colormp1.png`, url `https://colormp.com`, featured; Flowverse → `/img/flowversenft1.png`; Uniworld → `/img/uniworld1.png`, url is the YouTube link labelled "Watch demo"; react-edit-text → `/img/react-edit-text1.png`, url GitHub. express-typeorm-rest-boilerplate is **not** in old data: url `https://github.com/bymi15/express-typeorm-rest-boilerplate`, no image, description limited to what the name states ("Boilerplate for REST APIs with Express and TypeORM") — flag to Brian for a better line. Pick whichever numbered image of each set looks best; `imageAlt` describes the screenshot.
- **moreProjects**: the other 10 entries of `projects.json` (NFTMarketFlow 2022, Real Estate Management System 2021 no url, Job Trackify 2020, Coding Academy Platform 2019, UCL Korean Society Forum 2019, NHS Health Care App 2017, E-Commerce Platform 2017, Maplace Pre-order Landing Page 2016, Music TV 2015, 2D Helicopter Game 2015) with their urls.
- **education**: MEng Computer Science, University College London, 2021, "First Class Honours"; IB Diploma, Bangkok Patana School, 2015, "40/45".
- **skills**: exactly the four groups in the spec (Languages, Frontend, Backend & data, Infra).

- [ ] **Step 1: Write `tests/data.test.ts`**

```ts
test("experience newest first, Squarepoint current", () => {
  expect(experience.map(e => e.company)).toEqual(["Squarepoint Capital", "American Express", "Flowverse"]);
  expect(experience[0].end).toBe("Present");
  expect(experience[0].roles[0].title).toBe("Lead Software Engineer");
});
test("Amex roles in order", () => {
  expect(experience[1].roles.map(r => r.title)).toEqual([
    "Senior Software Engineer", "Software Engineer", "Technology Graduate Engineer", "Technology Summer Intern"]);
});
test("Flowverse ended Apr 2025", () => expect(experience[2].end).toBe("Apr 2025"));
test("Color is first and featured", () => {
  expect(projects[0].title).toMatch(/^Color/); expect(projects[0].featured).toBe(true);
  expect(projects.filter(p => p.featured)).toHaveLength(1);
});
test("project images exist in public/", () => {
  for (const p of projects) if (p.image) expect(existsSync(`public${p.image}`)).toBe(true);
});
test("every url is https except known http legacy sites", () => { /* allow http only for maplace.co, uclks.org */ });
test("moreProjects sorted newest first", () => { /* years non-increasing */ });
test("site constants", () => {
  expect(site.resumeUrl).toBe("/storage/BrianMin_Resume.pdf");
  expect(site.formspreeUrl).toBe("https://formspree.io/mrgyvnnj");
});
```

- [ ] **Step 2: Run `npx vitest run tests/data.test.ts`** — Expected: FAIL (modules not found).
- [ ] **Step 3: Create the five data files** per the Interfaces and content above.
- [ ] **Step 4: Run `npm test`** — Expected: all PASS.
- [ ] **Step 5: Commit** — `git commit -m "feat: add typed content data"`

---

### Task 3: Base layout, theme, nav, footer, SEO

**Files:**
- Create: `src/layouts/Base.astro`, `src/styles/global.css`, `src/components/Nav.astro`, `ThemeToggle.astro`, `Footer.astro`, `Section.astro`
- Modify: `src/pages/index.astro` (wrap in `Base`)
- Test: `tests/page.test.ts`

**Interfaces:**
- Consumes: `site` from Task 2.
- Produces: `<Base title? description?>` layout with default slot; `<Section id: string, title: string>` renders `<section id={id} class="section reveal"><h2>{title}</h2><slot/></section>`. Section ids used by Nav: `experience`, `work`, `skills`, `education`, `contact`.

Decisions:
- Theme: `<html data-theme>`; inline `is:inline` script in `<head>` reads `localStorage.theme` else `matchMedia('(prefers-color-scheme: dark)')`, sets `data-theme` before paint. Toggle is a `<button aria-label="Toggle dark mode">` that flips and stores. CSS tokens on `:root[data-theme=light|dark]`: `--bg --fg --muted --border --card --accent`. One accent (a blue/teal, builder's pick) with ≥4.5:1 contrast on both backgrounds.
- Fonts: `system-ui, -apple-system, "Segoe UI", Inter, sans-serif` — no web font download.
- Fade-in: `.reveal` is visible by default. A small script adds `js` to `<html>`; only `.js .reveal:not(.in)` is `opacity:0; translateY(8px)`. IntersectionObserver adds `.in`. Under `prefers-reduced-motion: reduce`, no transform/transition and no hidden state.
- Nav: sticky, blurred background, name on the left linking `#top`, section links + ThemeToggle on the right; below 640px the links row becomes `overflow-x: auto` with no wrap.
- Head: `<title>Brian Min — Lead Software Engineer</title>`, meta description from `site.description`, canonical `https://brianmin.com/`, `og:title`, `og:description`, `og:type=website`, `og:url`, `og:image` = `https://brianmin.com/android-chrome-512x512.png`, `twitter:card=summary`, favicon links (ico, 16, 32, apple-touch).
- Footer: `© {year} Brian Min` + LinkedIn/GitHub links.

- [ ] **Step 1: Add tests to `tests/page.test.ts`**

```ts
const page = loadPage("/");
test("head SEO", () => {
  expect(page.querySelector("title")?.text).toContain("Brian Min");
  expect(page.querySelector('meta[name="description"]')?.getAttribute("content")).toBeTruthy();
  expect(page.querySelector('meta[property="og:title"]')).not.toBeNull();
  expect(page.querySelector('link[rel="canonical"]')?.getAttribute("href")).toBe("https://brianmin.com/");
});
test("theme script runs before body", () => {
  const headScripts = page.querySelectorAll("head script").map(s => s.text).join("");
  expect(headScripts).toContain("data-theme"); expect(headScripts).toContain("prefers-color-scheme");
});
test("theme toggle present", () => expect(page.querySelector('button[aria-label="Toggle dark mode"]')).not.toBeNull());
test("nav links target existing sections", () => {
  for (const a of page.querySelectorAll("nav a[href^='#']").filter(a => a.getAttribute("href") !== "#top"))
    expect(page.querySelector(a.getAttribute("href")!)).not.toBeNull();
});
test("content not hidden without JS", () => {
  const css = readBuiltCss(); // concat dist/**/*.css and inline <style>
  expect(css).not.toMatch(/(^|[^.\w-])\.reveal\s*\{[^}]*opacity:\s*0/); // only `.js .reveal` may hide
});
```

The nav test will fail until sections exist; add placeholder `<Section>`s for all five ids in `index.astro` now, filled in later tasks.

- [ ] **Step 2: Run `npm test`** — Expected: new tests FAIL.
- [ ] **Step 3: Implement Base, global.css, Nav, ThemeToggle, Footer, Section** per decisions above.
- [ ] **Step 4: Run `npm test`** — Expected: all PASS.
- [ ] **Step 5: Commit** — `git commit -m "feat: base layout with theme toggle, nav, SEO"`

---

### Task 4: Hero and Experience

**Files:**
- Create: `src/components/Hero.astro`, `src/components/Experience.astro`
- Modify: `src/pages/index.astro`
- Test: `tests/page.test.ts`

**Interfaces:**
- Consumes: `site`, `experience`, `earlier`.

Decisions:
- Hero: `<h1>Brian Min</h1>`, title line, pitch, "London, UK" with a small pin icon (inline SVG), three buttons: **Resume** (primary, `href=site.resumeUrl`, opens new tab), **LinkedIn**, **GitHub** (secondary). Inline SVG icons, no icon font.
- Experience: vertical timeline — a left border line with a dot per company. Each company: name (linked if `url`), location, overall dates; under it each role as title + dates + summary. Use `<time>` is not required (dates are month strings). Then an "Earlier" sub-heading with `earlier` as a compact list: `title · company — dates` plus `line` in muted text.

- [ ] **Step 1: Add tests**

```ts
test("hero", () => {
  const hero = page.querySelector("#top")!;
  expect(hero.querySelector("h1")?.text).toBe("Brian Min");
  expect(hero.text).toContain("Lead Software Engineer at Squarepoint Capital");
  const hrefs = hero.querySelectorAll("a").map(a => a.getAttribute("href"));
  expect(hrefs).toEqual(expect.arrayContaining(["/storage/BrianMin_Resume.pdf",
    "https://www.linkedin.com/in/bymi15/", "https://github.com/bymi15"]));
});
test("experience order and Amex progression", () => {
  const text = page.querySelector("#experience")!.text;
  const idx = ["Squarepoint Capital", "American Express", "Flowverse"].map(c => text.indexOf(c));
  expect(idx.every(i => i >= 0)).toBe(true); expect([...idx].sort((a,b)=>a-b)).toEqual(idx);
  for (const t of ["Senior Software Engineer", "Technology Graduate Engineer", "Technology Summer Intern",
                   "Paratrooper", "Senior Programming Tutor", "Maplace", "Topolar"]) expect(text).toContain(t);
});
```

- [ ] **Step 2: Run `npm test`** — FAIL.
- [ ] **Step 3: Implement Hero and Experience; put Hero (id `top`) first in `index.astro`.**
- [ ] **Step 4: Run `npm test`** — PASS.
- [ ] **Step 5: Commit** — `git commit -m "feat: hero and experience timeline"`

---

### Task 5: Selected work, Skills, Education

**Files:**
- Create: `src/components/Projects.astro`, `Skills.astro`, `Education.astro`
- Modify: `src/pages/index.astro`
- Test: `tests/page.test.ts`

**Interfaces:**
- Consumes: `projects`, `moreProjects`, `skills`, `education`.

Decisions:
- Projects (section id `work`, title "Selected work"): CSS grid, 2 columns ≥ 720px, 1 below. Featured card spans both columns with image beside text on wide screens. Card: image (`loading="lazy"`, `width`/`height` attrs set, `object-fit: cover`, 16:10), title linked to `url`, description, tag chips, optional `extraLink`. Cards without image render without the image block. Use Astro `<Image>` only if it works with `public/` paths without config; otherwise plain `<img>`.
- "More projects": native `<details><summary>More projects (N)</summary>` with a list `title — year` (title linked when `url`). Works without JS.
- Skills: one small block per group: group name + items as inline chips. No ratings, no bars.
- Education: two rows — degree, institution, year, detail.

- [ ] **Step 1: Add tests**

```ts
test("Color is the first, featured project card", () => {
  const first = page.querySelector("#work article")!;
  expect(first.text).toContain("Color"); expect(first.classList.contains("featured")).toBe(true);
  expect(first.text).toContain("18K MAU");
});
test("all project images have alt text", () => {
  for (const img of page.querySelectorAll("#work img")) expect(img.getAttribute("alt")).toBeTruthy();
});
test("more projects is a details element", () => {
  const d = page.querySelector("#work details")!;
  expect(d.querySelectorAll("li").length).toBe(moreProjects.length);
});
test("skills grouped, no percentages", () => {
  const s = page.querySelector("#skills")!;
  for (const g of skills) expect(s.text).toContain(g.name);
  expect(s.text).not.toMatch(/\d+\s*%/); expect(s.querySelector("progress, meter")).toBeNull();
});
test("education", () => {
  const t = page.querySelector("#education")!.text;
  expect(t).toContain("First Class Honours"); expect(t).toContain("40/45");
});
```

- [ ] **Step 2: Run `npm test`** — FAIL.
- [ ] **Step 3: Implement the three components.**
- [ ] **Step 4: Run `npm test`** — PASS.
- [ ] **Step 5: Commit** — `git commit -m "feat: projects, skills and education sections"`

---

### Task 6: Contact form, 404, link hygiene

**Files:**
- Create: `src/components/Contact.astro`, `src/pages/404.astro`
- Modify: `src/pages/index.astro`
- Test: `tests/page.test.ts`

**Interfaces:**
- Consumes: `site.formspreeUrl`, `site.links`, `loadPage("/404")`.

Decisions:
- Form: `<form action={site.formspreeUrl} method="POST">` with labelled fields `name` (text, required), `_replyto` (type `email`, required, label "Your email", so replies are possible — this is the visitor's address, not Brian's), `message` (textarea, required), hidden `_subject` = "brianmin.com contact", honeypot `_gotcha` (visually hidden). Submit button. No JS required; progressive enhancement optional: a small script may `fetch` with `Accept: application/json` and show an inline "Thanks — I'll get back to you" / error message, falling back to normal submit if fetch fails to start.
- Beside/below the form: "Or find me on" LinkedIn and GitHub.
- 404: uses `Base`, "Page not found", link to `/`. GitHub Pages serves `dist/404.html` for `/about`, `/portfolio`, `/skills`, `/contact`.
- Every external link (`href` starting `http`) gets `target="_blank" rel="noopener noreferrer"`; the resume link opens in a new tab too.

- [ ] **Step 1: Add tests**

```ts
test("contact form posts to Formspree without JS", () => {
  const f = page.querySelector("#contact form")!;
  expect(f.getAttribute("action")).toBe("https://formspree.io/mrgyvnnj");
  expect(f.getAttribute("method")?.toUpperCase()).toBe("POST");
  for (const n of ["name", "_replyto", "message"]) {
    const el = f.querySelector(`[name="${n}"]`)!;
    expect(el.hasAttribute("required")).toBe(true);
    expect(f.querySelector(`label[for="${el.getAttribute("id")}"]`)).not.toBeNull();
  }
});
test("no mailto links", () => expect(page.querySelector('a[href^="mailto:"]')).toBeNull());
test("new-tab links are noopener", () => {
  for (const a of page.querySelectorAll('a[target="_blank"]'))
    expect(a.getAttribute("rel")).toContain("noopener");
});
test("404 page links home", () => {
  const nf = loadPage("/404");
  expect(nf.text).toContain("not found"); expect(nf.querySelector('a[href="/"]')).not.toBeNull();
});
```

- [ ] **Step 2: Run `npm test`** — FAIL.
- [ ] **Step 3: Implement Contact and 404; audit all components for external-link attributes.**
- [ ] **Step 4: Run `npm test`** — PASS (no-email test must still pass: the form has no address in it).
- [ ] **Step 5: Commit** — `git commit -m "feat: contact form and 404 page"`

---

### Task 7: Deployment workflow and README

**Files:**
- Create: `.github/workflows/deploy.yml`
- Modify: `README.md` (rewrite)

Decisions:
- Workflow: on `push` to `main` and `workflow_dispatch`; permissions `contents: read, pages: write, id-token: write`; concurrency group `pages`. Job `build`: checkout, `actions/setup-node` (Node 22, npm cache), `npm ci`, `npm test`, `actions/upload-pages-artifact` with `path: dist`. Job `deploy`: needs build, environment `github-pages`, `actions/deploy-pages`. `public/CNAME` is copied into `dist/` by Astro, so the custom domain is kept.
- README: what the site is, `npm install`, `npm run dev`, `npm test`, where content lives (`src/data/*.ts`), how to swap the resume (replace `public/storage/BrianMin_Resume.pdf`), go-live step (repo Settings → Pages → Source: GitHub Actions; then merge `redesign` into `main`).

- [ ] **Step 1: Write workflow; validate YAML** — `npx --yes yaml-lint .github/workflows/deploy.yml` or `python3 -c "import yaml,sys;yaml.safe_load(open(sys.argv[1]))" .github/workflows/deploy.yml`. Expected: no error.
- [ ] **Step 2: Verify `dist/CNAME`** — `npm run build && cat dist/CNAME` → `brianmin.com`.
- [ ] **Step 3: Rewrite README.** Run `npm test` (the no-email test covers README) → PASS.
- [ ] **Step 4: Commit** — `git commit -m "ci: deploy to GitHub Pages via Actions; rewrite README"`

---

### Task 8: Visual and behavioural check in a browser

**Files:** fixes only, wherever needed.

- [ ] **Step 1:** `npm run build && npx astro preview` (port 4321).
- [ ] **Step 2:** Screenshot at 1280px and 360px, light and dark. Expected: no horizontal scroll at 360px (`document.documentElement.scrollWidth <= innerWidth`), nav usable, featured Color card visually larger, timeline readable.
- [ ] **Step 3:** Reload with dark theme chosen → stays dark, no light flash. Disable JS → all sections visible, form present.
- [ ] **Step 4:** `npx @astrojs/check` → 0 errors. Total JS shipped on `/` < 5 KB (`find dist -name '*.js' | xargs wc -c` plus inline scripts).
- [ ] **Step 5:** Fix anything found, `npm test` → PASS, commit `fix: visual polish from browser check`.

---

## Open items for Brian (not blocking)

- The resume PDF may contain an email address; the site cannot scan it. Confirm that's acceptable or supply a version without it.
- express-typeorm-rest-boilerplate has no description or image in the old data; the card uses a one-line description derived from its name.
