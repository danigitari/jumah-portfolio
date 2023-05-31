/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "240px",
      sm: "480px",
      smd: "700px",
      md: "800px",
      lg: "976px",
      xl: "1440px",
      "2xl": "1536px",
    },
    extend: {
      backgroundImage: {
        "hero-pattern": "url('jumah1.png')",
      },
    },
  },
  plugins: [],
};

