
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        coffee: {
          dark: "#1F120B",
          deep: "#3B2416",
          caramel: "#C98A3D",
          cinnamon: "#8C4F24"
        },
        cream: {
          light: "#FFF8F1",
          medium: "#F6E7D8",
          warm: "#EBD3B1"
        },
        accent: {
          saffron: "#D98C2B",
          pistachio: "#8FAF6A",
          red: "#A93F2D"
        }
      },
      fontFamily: {
        heading: ["var(--font-playfair)"],
        body: ["var(--font-inter)"]
      }
    },
  },
  plugins: [],
}
  
