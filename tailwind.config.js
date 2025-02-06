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

    zIndex: {
      1: '1',
      2: '2',
      3: '3',
      10: '10',
      50: '50',
    },

    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#ffffff',
      black: '#000000',

      //Default TailWind `Green` colours - https://tailwindcss.com/docs/customizing-colors
      green: {
        50: '#f0fdf4',
        100: '#dcfce7',
        200: '#bbf7d0',
        300: '#86efac',
        400: '#4ade80',
        500: '#22c55e',
        600: '#16a34a',
        700: '#15803d',
        800: '#166534',
        900: '#14532d',
        950: '#052e16',
      },

      //Default TailWind `Red` colours - https://tailwindcss.com/docs/customizing-colors
      red: {
        50: '#fef2f2',
        100: '#fee2e2',
        200: '#fecaca',
        300: '#fca5a5',
        400: '#f87171',
        500: '#ef4444',
        600: '#dc2626',
        700: '#b91c1c',
        800: '#991b1b',
        900: '#7f1d1d',
        950: '#450a0a',
      },

      //Default TailWind `Gray` colours - https://tailwindcss.com/docs/customizing-colors
      gray: {
        50: '#f9fafb',
        100: '#f3f4f6',
        200: '#e5e7eb',
        300: '#d1d5db',
        400: '#9ca3af',
        500: '#6b7280',
        600: '#4b5563',
        700: '#374151',
        800: '#1f2937',
        900: '#111827',
        950: '#030712',
      },

      //Default TailWind `Stone` colours - https://tailwindcss.com/docs/customizing-colors
      stone: {
        50: '#fafaf9',
        100: '#f5f5f4',
        200: '#e7e5e4',
        300: '#d6d3d1',
        400: '#a8a29e',
        500: '#78716c',
        600: '#57534e',
        700: '#44403c',
        800: '#292524',
        900: '#1c1917',
        950: '#0c0a09',
      },

      //Custom brand `primary` colours
      primary: {
        50: '#fcf5f4',
        100: '#f9e9e7',
        200: '#f4d6d3',
        300: '#ecbbb5',
        400: '#df938a',
        500: '#d06e63',
        600: '#af4c41',
        700: '#9c4339',
        800: '#823a32',
        900: '#6d352f',
        950: '#3a1915',
      },

      //Custom brand `secondary` colours
      secondary: {
        50: '#f4f6f7',
        100: '#e3e7ea',
        200: '#cad2d7',
        300: '#a5b1bb',
        400: '#798997',
        500: '#5d6e7d',
        600: '#505c6a',
        700: '#454e59',
        800: '#3e444c',
        900: '#2f3339',
        950: '#21252b',
      },

      //Custom brand `typography` colours
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
            h4: {
              color: theme('colors.typography-heading'),
            },
            h5: {
              color: theme('colors.typography-heading'),
            },
            h6: {
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
            h4: {
              color: theme('colors.typography-heading.dark'),
            },
            h5: {
              color: theme('colors.typography-heading.dark'),
            },
            h6: {
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
