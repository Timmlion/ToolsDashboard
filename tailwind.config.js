/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Adding a custom neon orange-ish color if needed, or relying on standard palette.
        // Let's stick to standard colors for MVP unless specifically defined in a design token file.
        // PRD says "Neon Orange accents".
        // Let's map primary to orange-500 for consistency.
        primary: {
          DEFAULT: '#f97316', // orange-500
          hover: '#ea580c',   // orange-600
        }
      },
    },
  },
  plugins: [],
}