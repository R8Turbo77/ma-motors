/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './lib/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        gold: '#E31B2F',
        night: '#050505',
        charcoal: '#111111',
        smoke: '#A8A8A8',
        silver: '#C9CED6'
      },
      fontFamily: {
        sans: ['Arial', 'Helvetica', 'system-ui', 'sans-serif'],
        display: ['Georgia', 'Times New Roman', 'serif']
      },
      boxShadow: {
        gold: '0 0 40px rgba(227, 27, 47, 0.22)'
      }
    }
  },
  plugins: []
};
