/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Montserrat", "sans-serif"],
    },
    extend: {
      colors: {
        light_blue: "#CDE7ED",
        primary: "#0B2B5B",
        base_1: "#25A575",
        base_2: "#2595A5",
        base_3: "#3A719B",
        base_4: "#254B7A",
        base_5: "#142B58",
      },
    },
  },
  plugins: [],
};
