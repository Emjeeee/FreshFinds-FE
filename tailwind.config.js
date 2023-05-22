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
        "bg-home": "url('./src/assets/homepageBG.png')"
      }),
      fontFamily: {
        'uberMove': ["Uber Move Text", "sans-serif"],
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