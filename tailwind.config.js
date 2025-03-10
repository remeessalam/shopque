/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#c4ac68",
        desccolor: "#5C5F6A",
        bgColor: "#F6F6F6",
      },
    },
  },
  plugins: [],
};
