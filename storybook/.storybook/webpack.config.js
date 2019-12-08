const path = require("path");
module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.less$/,
    use: [
      {
        loader: "style-loader",
      },
      {
        loader: 'css-loader', // translates CSS into CommonJS
      },
      {
        loader: 'less-loader', // compiles Less to CSS
        options: {
          javascriptEnabled: true,
        },
      },
    ],
  });
  config.module.rules.push({
    test: /\.scss$/,
    issuer: {
      exclude: /\.less$/,
    },
    use: [
      // Creates `style` nodes from JS strings
      'style-loader',
      // Translates CSS into CommonJS
      'css-loader',
      // Compiles Sass to CSS
      'sass-loader',
    ],
  });
  config.module.rules.push({
    test: /\.scss$/,
    issuer: /\.less$/,
    use: {
      loader: require.resolve('../../src/styles/sassVarsToLess.js')
    }
  });
  config.resolve.extensions.push(".js", ".jsx");
  return config;
};