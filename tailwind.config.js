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
      boxShadow: {
        customSh:
          "0 0 1px 1px hsla(var(--customSh)), 0 0 25px 5px hsla(var(--shadowLayer))",
      },
      colors: {
        background: "hsla(var(--background))",
        primary: "hsla(var(--primary))",
        secondary: "hsla(var(--secondary))",
        accent: "hsla(var(--accent))",
        accent2: "hsla(var(--accent2))",
      },
    },
  },
  plugins: [],
};
