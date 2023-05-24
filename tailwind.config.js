/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "black": "#070606",
        "brown": "#4F200D",
        "orange": "#FF8400",
        "yellow": "#FFD93D",
        "white": "#FFFFFF",
        "nude-white": "#F6F1E9",
        "cream": "#FFE6CC"
      },
      backgroundImage: (theme) => ({
        "nude-white": "#F6F1E9",
        "bhome": "url('./src/assets/homeBG.svg')"
      }),
      fontFamily: {
        'uberMove': ["Uber Move Text", "sans-serif"],
      },
      fontSize: {
        "large": "2.5rem",
        "x-large": "4rem"
      },
      fontWeight: {
        "tnormal": 400,
        "tmedium": 500,
        "tsemi": 600,
        "tbold": 700
      },
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px"
    }
  },
  plugins: [],
}