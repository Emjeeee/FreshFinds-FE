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
        "bhome-first": "url('./src/assets/homeBG.svg')",
        "bhome-third": "url('./src/assets/homeBG3.svg')",
        "bhome-white": "url('./src/assets/homeBGWhite.svg')",
        "bhome-orange": "url('./src/assets/homeBGOrange.svg')",
        "btrend": "url('./src/assets/trendBG.svg')",
        "fruit": "url('./src/assets/fruits.svg')",
        "meat": "url('./src/assets/meat.svg')",
        "sushi": "url('./src/assets/sushi.svg')",
        "pork": "url('./src/assets/pork.svg')",
        "vege": "url('./src/assets/vegetables.svg')",
        "pastry": "url('./src/assets/pastry.svg')",
        "egg": "url('./src/assets/egg.svg')",
        "bconnect": "url('./src/assets/connectBG.svg')",
        "bingre-first": "url('./src/assets/bingre.svg')",
        "bcart-first": "url('./src/assets/bcart.svg')",
        "bforum-first": "url('./src/assets/bforum.svg')"
      }),
      fontFamily: {
        'uberMove': "uber",
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
      sm: '528px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px'
      // => @media (min-width: 1536px) { ... }
    }
  },
  plugins: [require('tailwind-scrollbar-hide')],
}