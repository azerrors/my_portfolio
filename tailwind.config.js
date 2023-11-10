/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {},
    fontFamily: {
      sans: ["Lato", "sans-serif"],
    },
    keyframes: {
      moveInLeft: {
        "0%": { transform: "translateX(-50%)", opacity: "0" },
        "80%": { transform: "translateX(5px)" },
        "100%": { transform: "translateX(0)", opacity: "1" },
      },
      moveInTop: {
        "0%": { transform: "translateY(-50%)", opacity: "0" },
        "80%": { transform: "translateY(5px)" },
        "100%": { transform: "translateY(0)", opacity: "1" },
      },
      moveInBottom: {
        "0%": { transform: "translateY(150%)", opacity: "0" },
        "80%": { transform: "translateY(5px)" },
        "100%": { transform: "translateY(0)", opacity: "1" },
      },
      moveInRight: {
        "0%": { transform: "translateX(50%)", opacity: "0" },
        "80%": { transform: "translateX(-5px)" },
        "100%": { transform: "translateX(0)", opacity: "1" },
      },
    },
    animation: {
      moveInLeft: "moveInLeft 2s",
      moveInTop: "moveInTop 2s",
      moveInRight: "moveInRight 2s",
      moveInBottom: "moveInBottom 2s",
    },
  },
  plugins: [],
};
