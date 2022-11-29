/** @type {import('tailwindcss').Config} */
module.exports = {
darkMode: "class", 

  content: [
    "./static/**/*.html",
    "./layouts/**/*.html",
    "./content/**/*.{md,html}",
    "./themes/lak/**/*.{ts,html}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-image": "url('/images/homepage/BGNoShape.webp')",
      },
      colors: {
        "accent-dark": "#0C4A50"
      }, 
      keyframes: { 
        "open-menu": { 
          from: {transform: 'scaleY(0)'},
          "50%": {transform: 'scaleY(1.1)'},
          to: {transform: 'scaleY(1)'}
        }
      }, 
      animation: { 
        "open-menu": "open-menu 0.5s ease-in-out forwards"
      }
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#93B59D",

          secondary: "#CDD1E0",

          accent: "#578387",

          neutral: "#F3F2EE",

          "base-100": "#FFFFFF",

          info: "#CDD1E0",

          success: "#36D399",

          warning: "#798697",

          error: "#7A766E",
        },
      },
    ],
  },
  plugins: [require("daisyui"), require("@tailwindcss/typography")],
};
