/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Heritage pub palette · warm, weighty, photo-friendly
        cream: {
          50: "#faf5ec",
          100: "#f5ede0",
          200: "#ece1cd",
          300: "#dccfb6",
        },
        burgundy: {
          400: "#9c3a4d",
          500: "#7d2c3d",
          600: "#6b2434",
          700: "#561c2a",
          800: "#3f141f",
        },
        charcoal: {
          800: "#272220",
          900: "#1a1614",
          950: "#100d0c",
        },
        gold: {
          300: "#e3bc70",
          400: "#d2a853",
          500: "#c89c45",
          600: "#a37e2f",
        },
        // Muted dusty rose · the nod to the building's pink without the cartoon
        rose: {
          300: "#dba9ad",
          400: "#c8868b",
          500: "#b46c72",
        },
      },
      fontFamily: {
        sans: [
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "system-ui",
          "sans-serif",
        ],
        display: [
          '"Cormorant Garamond"',
          '"Playfair Display"',
          "Georgia",
          "serif",
        ],
      },
      maxWidth: {
        page: "72rem",
        narrow: "44rem",
        prose: "38rem",
      },
      spacing: {
        "section-y": "5rem",
        "section-y-lg": "7rem",
      },
      borderRadius: {
        soft: "10px",
      },
      boxShadow: {
        warm: "0 12px 36px rgba(45, 22, 14, 0.18)",
        deep: "0 18px 48px rgba(0, 0, 0, 0.45)",
      },
      letterSpacing: {
        wider: "0.06em",
        widest: "0.2em",
      },
    },
  },
  plugins: [],
};
