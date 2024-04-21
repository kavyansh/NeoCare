/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Mulish", "sans-serif"],
      },
      colors: {
        "primary-orange": "#F99E33", // Add quotes around the color value
      },
    },
  },
  plugins: [],
};
