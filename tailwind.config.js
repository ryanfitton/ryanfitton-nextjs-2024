// @ts-check
const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './node_modules/pliny/**/*.js',
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,tsx}',
    './components/**/*.{js,ts,tsx}',
    './layouts/**/*.{js,ts,tsx}',
    './data/**/*.mdx',
  ],
  darkMode: 'class',

  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },

    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#ffffff',
      black: '#000000',

      gray: {
        100: 'red', /** TODO Fallback colours used by other parts on the site e.g plugins */
        200: 'red', /** TODO Fallback colours used by other parts on the site e.g plugins */
        300: 'red', /** TODO Fallback colours used by other parts on the site e.g plugins */
        400: 'red', /** TODO Fallback colours used by other parts on the site e.g plugins */
        500: 'red', /** TODO Fallback colours used by other parts on the site e.g plugins */
        700: 'red', /** TODO Fallback colours used by other parts on the site e.g plugins */
        800: 'red', /** TODO Fallback colours used by other parts on the site e.g plugins */
        900: 'red', /** TODO Fallback colours used by other parts on the site e.g plugins */
      },

      primary: {
        DEFAULT: '#af4c41',
        dark: '#6d2018',
        600: 'red', /** TODO Fallback colours used by other parts on the site e.g plugins */
      },
      secondary: {
        DEFAULT: '#2f3339',
        dark: '#1c222b',
      },

      neutral: {
        DEFAULT: '#eeeeee',
        dark: '#1c2026',
      },
      stone: {
        DEFAULT: '#5f5f5f',
        dark: '#0D1118',
      },

      'typography-heading': {
        DEFAULT: '#141c3a',
        dark: '#e3e8ed',
      },
      'typography-default': {
        DEFAULT: '#313a59',
        dark: '#f0f8ff',
      },

      'typography-link': {
        DEFAULT: '#7b281e',
        dark: '#cb574a',
      },
      'typography-link-hover': {
        DEFAULT: '#cb574a',
        dark: '#db6a5e',
      },
      'typography-link-focus': {
        DEFAULT: '#a03f33',
        dark: '#ce6054',
      },
      'typography-link-visited': {
        DEFAULT: '#7b281e',
        dark: '#cb574a',
      },
    },

    fontSize: {
      xs: ['0.9rem', '1.35rem'],
      sm: ['1rem', '1.45rem'],
      base: ['1.125rem', '1.65rem'],
      lg: ['1.28rem', '1.82rem'],
      xl: ['1.4rem', '1.9rem'],
      '2xl': ['1.5rem', '2rem'],
      '3xl': ['1.875rem', '2.25rem'],
      '4xl': ['2.25rem', '2.5rem'],
      '5xl': ['3rem', '1'],
      '6xl': ['3.75rem', '1'],
      '7xl': ['4.5rem', '1'],
      '8xl': ['6rem', '1'],
      '9xl': ['8rem', '1'],
    },

    fontWeight: {
      //thin: '100',
      //hairline: '100',
      //extralight: '200',
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      //extrabold: '800',
      //'extra-bold': '800',
      //black: '900',
    },

    fontFamily: {
      sans: ['var(--font-redHatText)', ...fontFamily.sans],
      serif: ['var(--font-brygada1918)', ...fontFamily.serif],
      mono: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;',
    },

    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.typography-default'),

            h1: {
              color: theme('colors.typography-heading'),
            },
            h2: {
              color: theme('colors.typography-heading'),
            },
            h3: {
              color: theme('colors.typography-heading'),
            },
            h3: {
              color: theme('colors.typography-heading'),
            },
            h3: {
              color: theme('colors.typography-heading'),
            },
            h3: {
              color: theme('colors.typography-heading'),
            },

            a: {
              color: theme('colors.typography-link'),
              '&:visited': {
                color: theme('colors.typography-link-visited'),
              },
              '&:hover': {
                color: theme('colors.typography-link-hover'),
              },
              '&:focus': {
                color: theme('colors.typography-link-focus'),
              },
            },
          },
        },
        invert: {
          css: {
            color: theme('colors.typography-default.dark'),

            h1: {
              color: theme('colors.typography-heading.dark'),
            },
            h2: {
              color: theme('colors.typography-heading.dark'),
            },
            h3: {
              color: theme('colors.typography-heading.dark'),
            },
            h3: {
              color: theme('colors.typography-heading.dark'),
            },
            h3: {
              color: theme('colors.typography-heading.dark'),
            },
            h3: {
              color: theme('colors.typography-heading.dark'),
            },

            a: {
              color: theme('colors.typography-link.dark'),
              '&:visited': {
                color: theme('colors.typography-link-visited.dark'),
              },
              '&:hover': {
                color: theme('colors.typography-link-hover.dark'),
              },
              '&:focus': {
                color: theme('colors.typography-link-focus.dark'),
              },
            },
          },
        },
      }),

      spacing: {
        128: '32rem',
        144: '36rem',
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
}
