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
        modifyVars: {
          hack: `true; @import "${path.resolve(__dirname, '../../src/styles/variables.less')}";`,
        },
        javascriptEnabled: true,
      },
    }]
  });
  config.resolve.extensions.push(".js", ".jsx");
  return config;
};