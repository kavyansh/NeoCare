/** @type {import('tailwindcss').Config} */

import flowbite from "flowbite-react/tailwind";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        primary: ["Mulish", "sans-serif"],
        spectral: ["Spectral", "serif"],
      },
      colors: {
        "primary-orange": "#F99E33", // Add quotes around the color value
        "primary-gray": "#666666",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      backgroundImage: {
        heroImage1: "url('/assets/images/heroImage1.png')",
        heroImage2: "url('/assets/images/heroImage2.png')",
      },
    },
  },
  plugins: ["tailwindcss-animate", flowbite.plugin()],
};
