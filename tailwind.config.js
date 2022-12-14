/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        "3xl": "0 3px 10px #8b8eaf",
        "2xs": "rgb(54 54 54) 0px 0px 0px 2px",
      },
    },
  },
  plugins: [],
}
