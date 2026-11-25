# brianmin.com

Personal portfolio site — a single static page built with [Astro](https://astro.build) and deployed to GitHub Pages at [brianmin.com](https://brianmin.com).

## Develop

```sh
npm install
npm run dev      # http://localhost:4321
npm test         # builds the site, then checks no email address is in the source or output
npx astro check  # type-check
```

Requires Node 22+.

## Editing content

All content lives in typed data files — edit these, not the components:

| File | What it holds |
| --- | --- |
| `src/data/site.ts` | Name, headline, pitch, links, contact form endpoint |
| `src/data/experience.ts` | Jobs (newest first) and the compact "Earlier" list |
| `src/data/projects.ts` | Selected work cards and the "More projects" list |
| `src/data/skills.ts` | Skill groups |
| `src/data/education.ts` | Education |

Project card images live in `src/assets/projects/` and are resized and converted to WebP at build time.

**Resume:** replace `public/storage/BrianMin_Resume.pdf` — the link path stays the same.

Do not put an email address anywhere in the repo; `npm test` fails if one appears. The contact form posts to Formspree.

## Deploy

Pushing to `main` runs `.github/workflows/deploy.yml`, which builds the site and publishes `dist/` to GitHub Pages. `public/CNAME` keeps the `brianmin.com` custom domain.

One-time setup: in the repo's **Settings → Pages**, set **Source** to **GitHub Actions**.
