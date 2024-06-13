module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        primary: '#b14343',
        secondary: '#000000',
        background: '#F6F7F8',
        accent: '#1EA896',
        warning: '#FF0180',
        info: '#DEB841',
      },
      fontFamily: {
        custom: ['MacQueen', 'sans-serif'],
      },
    },
  },
  variants: {},
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.nav-item': {
          // Tailwind CSS classes applied directly
          'font-size': '0.875rem', // text-sm
          'font-weight': '500', // font-medium
          'color': '#F6F7F8', // text-background
          '&:hover': {
            'color': '#1EA896', // hover:text-accent
          },
          'cursor': 'pointer',
        },
        'h2': {
          'font-size': '1.5rem', // text-2xl
          'font-weight': '600', // font-semibold
          'color': '#4C5454', // text-primary
          'margin-bottom': '1.5rem', // mb-6
        },
        '.workout-input': {
          'margin-top': '0.25rem',
          'display': 'block',
          'width': '100%',
          'border-radius': '0.375rem',
          'border': '1px solid #D1D5DB', // border-gray-300
          'box-shadow': '0 0 0 1px #D1D5DB', // shadow-sm
          'padding': '0.25rem 0.25rem',
          'font-size': '1rem', // text-base
          'line-height': '1.5',
          '&:focus': {
            'border-color': '#2563EB', // focus:border-indigo-500
            'box-shadow': '0 0 0 1px #2563EB', // focus:ring-indigo-500
          },
        },
      });
    },
  ],
};
