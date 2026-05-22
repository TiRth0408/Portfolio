/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./script/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#020617",
        night: "#0f172a",
        mist: "#cbd5e1",
        brand: {
          50: "#eefcf6",
          100: "#d7f8e8",
          200: "#b0f0d3",
          300: "#7ce4b8",
          400: "#45d396",
          500: "#20be7b",
          600: "#129863",
          700: "#117950",
          800: "#125f42",
          900: "#114e37"
        },
        accent: "#38bdf8"
      },
      fontFamily: {
        sans: ["Manrope", "sans-serif"],
        display: ["Sora", "sans-serif"]
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(255,255,255,0.05), 0 30px 80px rgba(8,15,33,0.55)",
        float: "0 24px 60px rgba(32,190,123,0.22)"
      },
      backgroundImage: {
        hero: "radial-gradient(circle at top left, rgba(56,189,248,0.22), transparent 35%), radial-gradient(circle at 80% 10%, rgba(32,190,123,0.18), transparent 30%), linear-gradient(180deg, rgba(2,6,23,0.95), rgba(2,6,23,1))"
      }
    }
  },
  plugins: [],
}