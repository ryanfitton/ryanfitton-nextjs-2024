module.exports = {
  plugins: [
    require('postcss-import'),
    require('tailwindcss'),
    require('tailwindcss/nesting'),
    require('postcss-nested'), // or require('postcss-nesting')
    require('autoprefixer'),
    require('postcss-preset-env'),
  ],
}
