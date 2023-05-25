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
        "bhome": "url('./src/assets/homeBG.svg')",
        "hhome": "url('./src/assets/homeBGmobile.svg')",
        "fruit": "url('./src/assets/fruits.svg')",
        "meat": "url('./src/assets/meat.svg')",
        "sushi": "url('./src/assets/sushi.svg')",
        "pork": "url('./src/assets/pork.svg')",
        "vege": "url('./src/assets/vegetables.svg')",
        "pastry": "url('./src/assets/pastry.svg')",
        "egg": "url('./src/assets/egg.svg')"
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
      xs: "428px",
      sm: "768px",
      md: "1060px"
    }
  },
  plugins: [],
}