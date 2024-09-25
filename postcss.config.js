module.exports = {
  plugins: {
    'postcss-preset-env': {},
    "postcss-import": {}, // Line 1
    "postcss-nested": {}, // Line 2
    tailwindcss: {},
    'tailwindcss/nesting': 'postcss-nested', // or 'postcss-nesting'
    autoprefixer: {},
  },
}
