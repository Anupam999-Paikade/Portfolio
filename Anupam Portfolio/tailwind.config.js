export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: "#18181A",
        secondary: "#27272A",
        accent: "#4F46E5", // Indigo/Purple accent
      }
    },
  },
  plugins: [],
}
