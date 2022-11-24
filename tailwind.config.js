/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mainColor: "#0F072C",
        grayText: "#6F6A80",
        lightGray: "#F8F9FF",
        mainRed: "#FF3841",
        deepPurple: "#b04aff",
        lightPurple: "#7d8ef7",
        lightBlue: "#2ea3f2",
      },
    },
  },
  plugins: [],
};
