/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    colors: {
      'primary': '#FED715',
      'secondary': '#F17959',
      'transition': '#F8AC42',
      'black': '#303030',
      'white': '#ffffff',
    },
    extend: {
        fontFamily: {
            'montserrat': ['Montserrat'],
            'lato': ['Lato'],
            'garamond': ['Garamond']
        }
    },
  },
  variants: {},
  plugins: []
}

