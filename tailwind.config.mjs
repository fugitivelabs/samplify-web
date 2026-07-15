/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#181512',    // warm near-black
        paper: '#faf7f2',  // warm off-white
        oak: '#bf6a35',    // sample-chip amber (brand accent)
        muted: '#6f665c',  // warm grey for secondary text
      },
      fontFamily: {
        mono: ['ui-monospace', 'SFMono-Regular', 'SF Mono', 'Menlo', 'monospace'],
      },
    },
  },
  plugins: [],
};
