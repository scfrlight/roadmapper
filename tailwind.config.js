/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#8B5CF6", // Electric Violet
        secondary: "#22D3EE", // Cyan Neon
        background: "#0F172A", // Slate 900
      },
    },
  },
  plugins: [],
};
