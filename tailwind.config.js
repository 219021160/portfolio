

const defaultTheme = require('tailwindcss/defaultTheme');


module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screen:{
      'xxs': '360px',
      'xs': '411px',
    },  
    extend: {
      
    },
  },
  plugins: [],
  darkMode: "class", //or "media"
}
