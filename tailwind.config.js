/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        jump: {
          '0%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-30px)', boxShadow: '0 15px 0 #fff' },
          '100%': { transform: 'translateY(0px)' },
        },
      },
      animation: {
        jump: 'jump 2s infinite',
      },
      boxShadow: {
        inset: 'inset 0 0 5px rgba(0,0,0,0.3), 0 5px 0 #ccc',
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
