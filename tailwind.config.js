/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: "#FBF3E4",
          light: "#FFF9F0",
          deep: "#F3E5CF",
          border: "#E9DCC8",
        },
        gold: {
          DEFAULT: "#C6A15B",
          soft: "#D9BE82",
        },
        rose: {
          DEFAULT: "#D9B6B0",
          soft: "#E8D0CC",
        },
        brown: {
          DEFAULT: "#3B302A",
          muted: "#766960",
        },
        whatsapp: {
          DEFAULT: "#25D366",
          hover: "#128C7E",
        }
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Montserrat', 'Poppins', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 8px 30px rgba(59, 48, 42, 0.05)',
        card: '0 10px 25px -5px rgba(59, 48, 42, 0.08)',
      },
      animation: {
        marquee: 'marquee 30s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      }
    },
  },
  plugins: [],
}
