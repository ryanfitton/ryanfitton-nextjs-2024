/* eslint-disable @typescript-eslint/no-require-imports */
/** @type {import("tailwindcss").Config } */
module.exports = {
  theme: {
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('--color-typography-default'),

            h1: {
              color: theme('--color-typography-heading'),
            },
            h2: {
              color: theme('--color-typography-heading'),
            },
            h3: {
              color: theme('--color-typography-heading'),
            },
            h4: {
              color: theme('--color-typography-heading'),
            },
            h5: {
              color: theme('--color-typography-heading'),
            },
            h6: {
              color: theme('--color-typography-heading'),
            },

            a: {
              color: theme('--color-typography-link'),
              '&:visited': {
                color: theme('--color-typography-link-visited'),
              },
              '&:hover': {
                color: theme('--color-typography-link-hover'),
              },
              '&:focus': {
                color: theme('--color-typography-link-focus'),
              },
            },
          },
        },
      }),


    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
}
