module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      gridTemplateColumns: {
        'auto-fit': 'repeat(auto-fit, minmax(400px, 1fr))',
        'auto-fit-sm': '1fr',
      },
      colors: {
        accent: '#a0be92',
      },
    },
    fontFamily: {
      fira: ['Fira Sans', 'sans-serif'],
    },
  },
  plugins: [],
};
