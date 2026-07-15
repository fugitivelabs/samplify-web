# samplify.pro

The marketing site for **Samplify Pro**. Astro + Tailwind, deployed to GitHub Pages
by GitHub Actions on every push to `main`. Same setup as `fugitivelabs-web`.

Product code lives next door in [`../app/`](../app/). This repo is marketing only.

## Develop

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
npm run preview  # serve the built site
```

## Deploy

Push to `main` → `.github/workflows/deploy.yml` builds and publishes to GitHub Pages.

One-time GitHub setup:
1. Create the repo (`fugitivelabs/samplify-web`) and push this directory.
2. **Settings → Pages → Source: GitHub Actions.**
3. Custom domain `samplify.pro`: the `public/CNAME` file is already committed; point the
   domain's DNS at GitHub Pages (apex `A`/`AAAA` records, or a `CNAME` for `www`), then
   check "Enforce HTTPS" once the cert provisions.

## Editing the site

- Copy and stages live in `src/pages/index.astro`.
- Brand palette (`ink` / `paper` / `oak` / `muted`) is in `tailwind.config.mjs`.
- The logo mark is `src/components/Mark.astro`; favicon is `public/favicon.svg`.
- Contact address is the `email` const at the top of `index.astro` (`hello@samplify.pro`).

If the domain ever changes, update it in `astro.config.mjs` (`site`), `public/CNAME`,
`public/robots.txt`, and the `email` const.
