/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          "0%": { top: "-30px" },
          "100%": { top: "8px" },
        },
      },
      animation: {
        wiggle: "wiggle 1s ease-in-out",
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

