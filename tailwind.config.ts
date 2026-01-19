import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        imbue: ["var(--font-imbue)", "serif"],
      },
      colors: {
        cream: {
          50: '#fffdf5',
          100: '#fefaeb', // Base
          200: '#fdf6d0',
          300: '#fbf0b0',
        },
        brown: {
          50: '#f7f5f3',
          100: '#efebe9',
          200: '#d7ccc8',
          500: '#8d6e63',
          800: '#4e342e',
          900: '#3e2723', // Darkest
          950: '#2c1810', // Almost black brown
        }
      }
    }
  },
  plugins: [],
};
export default config;