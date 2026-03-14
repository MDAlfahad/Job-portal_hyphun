/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#08D9D6",
        secondary: "#FF2E63",
        textcolor: "#252A34",
        textcolor2: "#808080",
        background: "#EAEAEA",
        secondbg: "#9df5f3",
      },
    },
  },
  plugins: [],
};
