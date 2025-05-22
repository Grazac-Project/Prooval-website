/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mont: ["var(--font-montserrat)"],
        inter: ["var(--font-inter)"],
        whyte: ["var(--font-whyte)"],
        grotesk: ["var(--font-space-grotesk)"],
        onest: ["var(--font-onest)"]
      },
      boxShadow: {
        abc: "0 2px 8px 0 rgba(0, 0, 0, 0.15)",
        def: "-4px 4px 20px 0 rgba(0,0,0,0.1)",
        ghi: "-5.833333492279053px 5.833333492279053px 29.166667938232422px 0px rgba(0, 0, 0, 0.1)",
        footerInput: "0 1px 2px 0 rgba(16, 24, 40, 0.05)",
      },
    },
    screens: {
      // '3xl': {'max': '2560px'},
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }
      "1xl": { max: "1440px" },
      xxl: { max: "1300px" },
      xl: { max: "1200px" },
      // => @media (max-width: 1279px) { ... }
      lgx: { max: "1024px" },
      lg: { max: "900px" },
      // => @media (max-width: 1023px) { ... }
      md: { max: "768px" },
      // => @media (max-width: 767px) { ... }
      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }
      xm: { max: "467px" },
      // => @media (max-width: 639px) { ... }
      xxm: { max: "420px" },
      xxxm: { max: "415px" },
      xxxxm: { max: "390px" },
      ssxm: { max: "360px" },
      // => @media (max-width: 639px) { ... }
      sxm: { max: "350px" },
      // => @media (max-width: 639px) { ... }
    },
    colors: {
      primary: "#1453FF",
    },
  },
  plugins: [],
};
