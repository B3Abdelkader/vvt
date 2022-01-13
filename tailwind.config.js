module.exports = {

  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],

   darkMode: false,

   theme: {
     fontFamily: {
     display: ['Source Serif Pro', 'Georgia', 'serif'],
     body: ['Synonym', 'system-ui', 'sans-serif'],
  },

     extend: {},

   },

   variants: {

     extend: {},

   },

   plugins: [
     require('daisyui'),
    ],

 }