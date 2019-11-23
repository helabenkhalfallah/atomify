const path = require("path");
module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.less$/,
    use: [{
      loader: "style-loader"
    }, {
      loader: "css-loader"
    }, {
      loader: "less-loader",
      options: {
        javascriptEnabled: true,
      },
    }]
  });
  config.resolve.extensions.push(".js", ".jsx");
  return config;
};