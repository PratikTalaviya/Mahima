/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        mono: ["Major Mono Display", "monospace"],
        manrope: ["Manrope", "sans-serif"],
        "old-standard": ["Old Standard TT", "serif"],
        "open-sans": ["Open Sans", "sans-serif"],
        "poiret-one": ["Poiret One", "cursive"],
        barlow: ["Barlow Condensed", "sans-serif"],
        reddit: ["Reddit Mono", "monospace"],
        urbanist: ["Urbanist", "sans-serif"],
      },
    },
  },
  plugins: [],
};
