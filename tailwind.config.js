// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "0px",
      sm: "350px",
      md: "768px",
      lg: "976px",
      xl: "1200px",
    },
    container: {
      center: true,
      padding: "0 1rem",
    },
    extend: {
      colors: {
        primary: "#13b3d8", // Apni ekhon 'text-primary' ba 'bg-primary' use korte parben
        black: "#0f1827",
        secondary: "#747a81",
        custom_gra: "text-gradient-to-r from-[#4289f7] to-[#13b3d8]",
      },

      fontFamily: {
        primary: ["Mulish, sans-serif"],
      },
    },
  },
  plugins: [
    // require("@tailwindcss/typography"),
    // require("@tailwindcss/forms"),
    // require("@tailwindcss/aspect-ratio"),
  ],
};
