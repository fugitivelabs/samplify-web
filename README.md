# samplifypro.com

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

One-time GitHub setup (done):
1. Repo `fugitivelabs/samplify-web` created and pushed.
2. **Settings → Pages → Source: GitHub Actions** (enabled).

### Custom domain — samplifypro.com

The site is built for the apex domain (`base: '/'`), so it renders correctly only at
`samplifypro.com`, not the temporary `fugitivelabs.github.io/samplify-web/` preview (there
the root-relative `/_astro/…` asset paths 404 — expected, not a bug).

**1. Add these DNS records at the samplifypro.com registrar.**

Apex (`@`) `A` records → GitHub Pages:

```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

Apex (`@`) `AAAA` records → GitHub Pages (IPv6):

```
2606:50c0:8000::153
2606:50c0:8001::153
2606:50c0:8002::153
2606:50c0:8003::153
```

Optional `www` subdomain — `CNAME` `www` → `fugitivelabs.github.io.`

**2. Set the custom domain.** After DNS resolves, either commit `public/CNAME`
(`samplifypro.com`, already present) and redeploy, or set it in **Settings → Pages →
Custom domain** / via the API:

```bash
gh api --method PUT repos/fugitivelabs/samplify-web/pages -f cname='samplifypro.com'
```

**3. Enforce HTTPS.** Once GitHub provisions the TLS cert (minutes to ~1 hour), check
**Settings → Pages → Enforce HTTPS**.

## Editing the site

- Copy and stages live in `src/pages/index.astro`.
- Brand palette (`ink` / `paper` / `oak` / `muted`) is in `tailwind.config.mjs`.
- The logo mark is `src/components/Mark.astro`; favicon is `public/favicon.svg`.
- Contact address is the `email` const at the top of `index.astro` (`hello@samplifypro.com`).

If the domain ever changes, update it in `astro.config.mjs` (`site`), `public/CNAME`,
`public/robots.txt`, and the `email` const.
