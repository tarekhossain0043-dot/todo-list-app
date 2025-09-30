/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#ff3d4f", // Apni ekhon 'text-primary' ba 'bg-primary' use korte parben
        lalu: "#ff4d4f",
      },
    },
  },
  plugins: [],
};
