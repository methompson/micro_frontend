const path = require('path');
const webpack = require('webpack'); // Import webpack
const { VueLoaderPlugin } = require('vue-loader');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const port = 8080;

/**
 * The host application doesn't use any special Webpack configuration option except for
 * output.environment. We set module and dynamicImport to true to enable Webpack 5's
 * native module and dynamic import support. This is required for the host application
 * to be able to load client ES Modules on-demand.
 */

module.exports = {
  mode: 'development',
  cache: false,
  devtool: 'source-map',
  target: 'web',
  externalsType: 'import',
  // externalsPresets: {
  //   web: false,
  //   webAsync: true,
  // },
  optimization: {
    minimize: false,
  },
  entry: path.resolve(__dirname, './src/main.ts'),
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: `http://localhost:${port}/`,
    environment: {
      module: true,
      dynamicImport: true,
    },
  },
  resolve: {
    extensions: ['.ts', '.js', '.vue', '.json'],
    alias: {
      vue: 'vue/dist/vue.runtime.esm.js',
      '@': path.resolve(__dirname, './src'),
      '@assets': path.resolve(__dirname, 'src/assets'),
    },
  },
  module: {
    rules: [
      { test: /\.vue$/, loader: 'vue-loader' },
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        options: { appendTsSuffixTo: [/\.vue$/] },
      },
      {
        test: /\.css|.sass|.scss$/,
        use: [
          'vue-style-loader',
          {
            loader: 'css-loader',
            options: { esModule: false },
          },
          'sass-loader',
          // {
          //   loader: MiniCssExtractPlugin.loader,
          //   options: {
          //     esModule: false,
          //   },
          // },
        ],
      },
      {
        test: /\.png$/,
        use: {
          loader: 'url-loader',
          options: {
            esModule: false,
            name: '[name].[ext]',
            limit: 8192,
          },
        },
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
    new webpack.ProvidePlugin({
      process: 'process/browser',
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './public/index.html'),
      chunks: ['main'],
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    historyApiFallback: true,
    compress: true,
    port,
    hot: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers':
        'X-Requested-With, content-type, Authorization',
    },
  },
};
