import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// Custom domain deploy (samplifypro.com). If you ever move off the custom domain
// to a Pages project subpath, set `base: '/samplify-web/'` and drop public/CNAME.
export default defineConfig({
  site: 'https://samplifypro.com',
  integrations: [tailwind(), sitemap()],
});
