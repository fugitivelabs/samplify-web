import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import { draftPaths } from './src/legal-docs.mjs';

/**
 * Draft legal pages must not be advertised in the sitemap — a sitemap entry and
 * a `noindex` tag are contradictory signals. Derived from the same publish flags
 * the pages render from, so the two cannot drift: previously this was a second
 * hand-maintained list, and forgetting either side silently produced a live
 * policy missing from the sitemap, or a noindexed draft advertised in it.
 */
const DRAFT_PAGES = draftPaths();

// Custom domain deploy (samplifypro.com). If you ever move off the custom domain
// to a Pages project subpath, set `base: '/samplify-web/'` and drop public/CNAME.
export default defineConfig({
  site: 'https://samplifypro.com',
  integrations: [
    tailwind(),
    sitemap({
      filter: (page) => !DRAFT_PAGES.some((p) => new URL(page).pathname === p),
    }),
  ],
});
