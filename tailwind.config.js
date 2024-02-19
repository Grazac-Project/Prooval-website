/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        mont: ["var(--font-montserrat)"],
        inter: ["var(--font-inter)"],
        whyte: ["var(--font-whyte)"],
        grotesk: ["var(--font-space-grotesk)"],
        
      },
      boxShadow: {
        'abc': '0 2px 8px 0 rgba(0, 0, 0, 0.15)'
      }
    },
    screens: {
      '2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }
      
      'xxl': {'max': '1300px'},

      'xl': {'max': '1200px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '900px'},
      // => @media (max-width: 1023px) { ... }

      'md': {'max': '768px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '639px'},
      // => @media (max-width: 639px) { ... }
      'xm': {'max': '467px'},
      // => @media (max-width: 639px) { ... }
      'xxm': {'max': '420px'},
      // => @media (max-width: 639px) { ... }
    },
    colors: {
      primary: '#1453FF'
    }
  },
  plugins: [],
}
