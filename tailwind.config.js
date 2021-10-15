module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        'leinster-blue' : '#005daa',
        'leinster-navy' : '#013a81',
        'leinster-gold' : '#eeb111',
        'leinster-grey' : '#9fa1a4',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
