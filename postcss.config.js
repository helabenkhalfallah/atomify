module.exports = {
  plugins: {
    'postcss-prefix-selector': {
      prefix: '.atomify-116',
    },
    'postcss-import': {},
    'postcss-preset-env': {
      browsers: [
        'defaults',
        'IE 10',
        'IE 9',
      ],
    },
    cssnano: {},
  },
};
