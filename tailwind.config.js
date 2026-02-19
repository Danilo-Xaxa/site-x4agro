/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'verde-escuro': '#2A5936',
        'verde-medio': '#23592B',
        'verde-claro': '#3B8C4A',
        'marrom': '#59341E',
        'bege': '#A6918A',
        'branco': '#F2F2F2',
        'escuro': '#1A1A1A',
        'vermelho': '#DC2626',
        'amarelo': '#D4A017',
        'bege-claro': '#F5F0ED',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}
