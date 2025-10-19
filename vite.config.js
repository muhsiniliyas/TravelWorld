import { moduleConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 3s linear infinite',
        'bounce-slow': 'bounce 2s infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px #00bcd4' },
          '100%': { boxShadow: '0 0 20px #00bcd4, 0 0 30px #00bcd4' },
        }
      },
      perspective: {
        '1000': '1000px',
        '2000': '2000px',
      },
      transform: {
        'rotate-y-180': 'rotateY(180deg)',
        'rotate-y-0': 'rotateY(0deg)',
      }
    },
  }, 
  plugins: [react(),tailwindcss()],
}
