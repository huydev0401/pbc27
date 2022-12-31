/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["Roboto", "sans-serif"],
      },
      colors: {
        white: "#fff",
        black: "#000",
        black2: "#010101",
        darkBlue: "#2AABE2",
        lightBlue1: "#79E7FF",
        lightBlue2: "#12F1FF",
        orange: "#FD4E33",
        green: "#AAD604",
        darkYellow: "#FAD225",
        lightYellow: "#F5F84A",
        purple: "#8D1BFF",
        pink: "#F84978",
      },
      margin: {
        section: "60px",
        sectionMB: "40px",
      },
      spacing: {
        section: "60px",
        sectionMB: "40px",
      },
    },
  },
  plugins: [],
};
