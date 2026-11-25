# brianmin.com redesign — design

## Intent

The portfolio at brianmin.com is several years out of date in both content and UI. It should be rebuilt as a modern site aimed at **recruiters and hiring managers**: in a short skim they should see who Brian is now (Lead Software Engineer at Squarepoint Capital), his track record (American Express, Color, Flowverse), and how to get his resume or reach him.

## Goals

- Current, accurate content: Squarepoint role, Amex progression, Color highlighted as the first marketplace on Story.
- Modern, minimal, fast, readable UI with light and dark mode; works well on mobile.
- Easy to keep up to date: content lives in plain data files.
- Simple hosting: static site on GitHub Pages at brianmin.com.

## Non-goals

- No backend, CMS, admin dashboard or database.
- No blog.
- No analytics (can be added later).

## Anti-goals

- Email address must **not** appear anywhere on the site or in its source.
- No gimmicky effects that slow the page or get in the way of skimming (typing animations, heavy parallax, skill-percentage bars). Subtle CSS-only motion that respects `prefers-reduced-motion` is fine (see `2026-11-25-hero-refresh-design.md`).
- No invented content: every claim comes from the existing site data or from Brian.

## Constraints

- Hosting: GitHub Pages, custom domain `brianmin.com` (`public/CNAME`). Currently deployed from the `gh-pages` branch; the old Netlify API (`brianmin.netlify.app/api`) is dead (502) and unused.
- Contact form keeps the existing Formspree endpoint (`https://formspree.io/mrgyvnnj`).
- Existing images in `public/img` and the resume at `public/storage/BrianMin_Resume.pdf` are reused. Brian will supply an updated resume later; the link path stays the same so swapping the file is enough.
- Work happens on the `redesign` branch; the live site is untouched until Brian approves.

## Approaches

| Approach | Trade-offs |
| --- | --- |
| **Astro static site** (chosen) | Built for content sites: static HTML, near-zero JS, good SEO and speed. React islands still possible. New tool for the repo. |
| Vite + React SPA | Familiar React, but a client-rendered SPA is worse for SEO and first paint; would need prerendering again (as react-snap does today). |
| Next.js static export | Works, but much more framework than a one-page portfolio needs. |

Brian handed over the how ("go with your recommendations"); Astro is Claude's call.

## Design

### Stack

- Astro (latest), TypeScript, plain CSS with custom properties (no Bootstrap/Tailwind needed for one page). Claude's call.
- Content in typed data files under `src/data/` (`experience.ts`, `projects.ts`, `education.ts`, `skills.ts`, `site.ts`).
- Deployment: GitHub Actions workflow building Astro and publishing to GitHub Pages (`actions/deploy-pages`), keeping the CNAME. Switching Pages source from the `gh-pages` branch to Actions is a repo setting Brian flips at go-live.

### Page structure (single scrolling page, sticky top nav with section links)

1. **Hero** — "Brian Min", "Lead Software Engineer at Squarepoint Capital", one-line pitch about building data-heavy full-stack applications (and previously event-driven microservices at American Express). Buttons: Resume (PDF), LinkedIn, GitHub. London location.
2. **Experience** — vertical timeline, newest first:
   - Squarepoint Capital — Lead Software Engineer — Sep 2025 – Present — building data-heavy internal full-stack web applications.
   - American Express — one entry, Sep 2021 – Sep 2025, with role progression listed: Senior Software Engineer (Nov 2024 – Sep 2025), Software Engineer (Jun 2022 – Nov 2024), Technology Graduate Engineer (Sep 2021 – Jun 2022); descriptions from existing data. The Jul–Aug 2020 summer internship is listed under the same entry.
   - Flowverse — Technical Advisor & Lead Developer — Mar 2023 – Apr 2025, Remote.
   - Earlier, shown compactly: UCL Senior Programming Tutor, Topolar, Republic of Korea Marine Corps (Paratrooper, kept as one short line — it's distinctive), Maplace.
3. **Selected work** — cards with image, title, one-line description, tags, and link:
   Color (first IP marketplace on Story mainnet, 18K MAU, 10K listings — featured first, visually larger), Flowverse NFT Marketplace, Uniworld 3D Environment (with demo video link), react-edit-text, express-typeorm-rest-boilerplate.
   A collapsed "More projects" list holds the remaining entries as one-liners (title, year, link where one exists).
4. **Skills** — grouped plain lists, no ratings: Languages (TypeScript, JavaScript, Go, Python, Java, Solidity/Cadence), Frontend (React, Redux, Tailwind), Backend & data (Node.js, Kafka, PostgreSQL, MongoDB), Infra (Docker, Kubernetes, CI/CD). Claude's call based on existing site data; Brian can edit `skills.ts`.
5. **Education** — MEng Computer Science, UCL, First Class Honours (2021); IB Diploma 40/45, Bangkok Patana School (2015).
6. **Contact** — Formspree form (name, message, reply-to field) plus LinkedIn and GitHub links. No email shown.

Footer: name, year, links.

### Look and feel

- Minimal, generous whitespace, max content width ~720–960px, one accent colour, system-ui / Inter-style sans for text.
- Light and dark mode following the OS setting, with a toggle.
- Subtle fade-in on scroll at most; respects `prefers-reduced-motion`.
- SEO: title, description, Open Graph tags, favicon reused.

### Removed

Create React App frontend, Bootstrap/Reactstrap, react-snap, Go serverless functions (`functions/`), MongoDB code (`db/`), admin dashboard (`dashboard/`, including a committed `main.exe`), `netlify.toml`, `Makefile`, `go.mod`/`go.sum`, `.env.example`, `config.EMAIL`. README rewritten for the new stack. Stale remote dependabot branches can be deleted at go-live (Brian's say).

## Left to the builder

- Exact colours, type scale, spacing, card styling and timeline styling within the look above.
- Copy edits to existing descriptions for concision, without changing facts.
- Which image from each project's set to use on its card.
