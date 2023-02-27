/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
      'blue-glow': '0 0 10px #00b4ff, 0 0 20px #00b4ff, 0 0 30px #00b4ff, 0 0 40px #00b4ff, 0 0 50px #00b4ff, 0 0 75px #00b4ff',
      'purple-glow': '0 0 5px #8A3FFC, 0 0 10px #8A3FFC, 0 0 15px #8A3FFC, 0 0 20px #8A3FFC, 0 0 25px #8A3FFC, 0 0 37px #8A3FFC',
      },
    },
  },
  plugins: [],
}
