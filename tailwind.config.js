const withMT = require("@material-tailwind/react/utils/withMT");

// eslint-disable-next-line no-undef
module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      '2xl': {'max': '1500px'},
      // => @media (max-width: 1535px) { ... }

      'xl': {'max': '950px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '765px'},
      // => @media (max-width: 1023px) { ... }

      'md': {'max': '420px'},
      // => @media (max-width: 767px) { ... }

      'xs': {'max': '390px'},
      
    },
    extend: {},
  },
  plugins: [],
  darkMode: "class",
});
