const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const webpack = require('webpack');

module.exports = {
  mode: 'production',
  entry: './src/lib/index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'atomify-kit.js',
    library: 'atomify-kit',
    libraryTarget: 'umd',
    publicPath: '/dist/',
    umdNamedDefine: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.html$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
      {
        test: /\.css$/i,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
      {
        test: /\.less$/,
        use: [
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
      },
      {
        loader: 'webpack-ant-icon-loader',
        enforce: 'pre',
        options: {
          chunkName: 'antd-icons', // default is antd-icons
        },
        include: [
          require.resolve('@ant-design/icons/lib/dist'),
        ],
      },
    ],
  },
  externals: {
    react: {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react',
      umd: 'react',
    },
    'react-dom': {
      root: 'ReactDOM',
      commonjs2: 'react-dom',
      commonjs: 'react-dom',
      amd: 'react-dom',
      umd: 'react-dom',
    },
  },
  resolve: {
    extensions: [
      '*',
      '.js',
      '.jsx',
    ],
    alias: {
      moment: `moment/moment.js`
    },
  },
  plugins: [
    new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /ru/),
    // new BundleAnalyzerPlugin(),
  ],
  optimization: {
    minimize: true,
    splitChunks: {
      chunks: 'all'
    },
    minimizer: [
      new TerserPlugin({
        cache: true,
        parallel: true,
        terserOptions: {
          compress: {
            dead_code: true,
            conditionals: true,
            booleans: true,
          },
          module: false,
          output: {
            comments: false,
            beautify: false,
          },
        },
      }),
    ],
  },
};
