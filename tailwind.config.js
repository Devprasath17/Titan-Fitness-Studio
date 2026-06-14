/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        titan: {
          black: '#080808',
          dark: '#111111',
          card: '#161616',
          border: '#222222',
          orange: '#f97316',
          amber: '#f59e0b',
          red: '#dc2626',
          fire: '#ea580c',
          gray: {
            100: '#f5f5f5',
            200: '#e5e5e5',
            300: '#d4d4d4',
            400: '#a3a3a3',
            500: '#737373',
            600: '#525252',
            700: '#404040',
            800: '#262626',
            900: '#171717',
          },
        },
      },
      fontFamily: {
        display: ['Bebas Neue', 'Impact', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'orange-glow': 'radial-gradient(ellipse at center, rgba(249,115,22,0.15) 0%, transparent 70%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-orange': 'pulseOrange 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'gradient-shift': 'gradientShift 8s ease infinite',
        'counter': 'counter 2s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        pulseOrange: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(249, 115, 22, 0.4)' },
          '50%': { boxShadow: '0 0 0 20px rgba(249, 115, 22, 0)' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
    },
  },
  plugins: [],
};
