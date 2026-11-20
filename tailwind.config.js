/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: {
          DEFAULT: '#FAF8F5',
          light: '#FFFFFF',
          dark: '#F3EFE8',
          card: '#FBF9F6',
        },
        sage: {
          50: '#F5F7F5',
          100: '#E7EDE7',
          200: '#D0DDD1',
          300: '#AFC3B1',
          600: '#58735C',
          700: '#435B47',
          800: '#2F4233',
        },
        henna: {
          DEFAULT: '#6D3A22',
          light: '#8A4C2E',
          dark: '#542A16',
          soft: '#F8F1EB',
        },
        terracotta: {
          DEFAULT: '#C15C3D',
          hover: '#A94B2E',
          soft: '#FBF2EE',
        },
        forest: '#233226',
        charcoal: {
          DEFAULT: '#262422',
          light: '#54504B',
          muted: '#7A756E',
        },
        sand: {
          DEFAULT: '#EAE4D9',
          light: '#F5F1E9',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', '"DM Sans"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(35, 50, 38, 0.05), 0 4px 6px -2px rgba(35, 50, 38, 0.02)',
        'card': '0 10px 30px -5px rgba(35, 50, 38, 0.06), 0 4px 6px -2px rgba(35, 50, 38, 0.03)',
        'elevated': '0 20px 40px -10px rgba(35, 50, 38, 0.1)',
      }
    },
  },
  plugins: [],
}
