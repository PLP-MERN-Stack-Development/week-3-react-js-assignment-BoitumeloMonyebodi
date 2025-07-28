/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#ebaf6c",
        secondary: "#f1bd83",
      },
    },
  },
  plugins: [],
};

