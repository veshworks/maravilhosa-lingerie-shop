module.exports = {
  purge: [
    './src/**/*.vue',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Open Sans', 'sans-serif'],
    },
    screens: {
      'mobile': { max: '1023px' },
      'desktop': '1024px',
    },
    extend: {
      boxShadow: {
        'selected': '0 0 0 4px #c6a058'
      },
      textColor: {
        'primary': '#c6a058',
        'secondary': '#727272',
        'accent': '#ff0000',
      },
      backgroundColor: {
        'primary': '#c6a058',
        'secondary': '#727272',
        'accent': '#ff0000',
      },
      gridTemplateColumns: {
        '1full': 'repeat(1, minmax(0, 100%))',
        '1fr2auto': '1fr auto',
      },
      animation: {
        skeleton: '2s skeleton infinite linear',
      },
      keyframes: {
        skeleton: {
          '0%, 100%': {
            '--offset': '200%',
            'background-size': '80%',
            'background-image': 'linear-gradient(90deg, rgba(0, 0, 0, 0.03) 50%, rgba(0, 0, 0, 0.12) 70%, rgba(0, 0, 0, 0.03))',
          },
          'from': {
            'background-position-x': 'calc(-1 * var(--offset))',
          },
          'to': {
            'background-position-x': 'var(--offset)',
          },
        }
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
