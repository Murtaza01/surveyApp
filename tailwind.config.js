/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "425px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      xxl: "1536px",
    },
    extend: {
      colors: {
        background: "hsla(var(--background))",
        heading: "hsla(var(--heading))",
        paragraph: "hsla(var(--paragraph))",
        accent: "hsla(var(--accent))",
        shColor: "hsla(var(--shColor))",
        altBg: "hsla(var(--altBg))",
      },
    },
  },
  plugins: [],
};
