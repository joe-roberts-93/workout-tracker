module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        primary: '#4C5454',
        secondary: '#000000',
        background: '#F6F7F8',
        accent: '#1EA896',
        warning: '#FF0180',
        info: '#DEB841',
      },
    },
  },
  variants: {},
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.nav-item': {
          '@apply text-sm font-medium text-background hover:text-accent cursor-pointer': {},
        },
      });
    }
  ],
}
