/**
 * Publish state for the legal documents — the SINGLE source of truth.
 *
 * Imported by both the pages (which render from it) and astro.config.mjs (which
 * derives the sitemap exclusion from it), so the two can never disagree. Before
 * this existed, the sitemap kept its own list and the two drifted silently in
 * both directions: a live policy missing from the sitemap, or a noindexed draft
 * advertised in it.
 *
 * To publish a document: write every section body in its .astro page, then set
 * `published: true` and an `effective` date here. Nothing else to remember —
 * the build fails loudly if the sections are not all written (see Legal.astro).
 *
 * Keys are the built URL paths, trailing slash included, to match what
 * @astrojs/sitemap passes to its filter.
 */
export const LEGAL_DOCS = {
  '/privacy/': { published: false, effective: null },
  '/terms/': { published: false, effective: null },
};

/** Paths that must stay out of the sitemap because they are still drafts. */
export const draftPaths = () =>
  Object.entries(LEGAL_DOCS)
    .filter(([, doc]) => !doc.published)
    .map(([path]) => path);
