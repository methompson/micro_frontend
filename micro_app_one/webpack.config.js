const path = require('path');
const webpack = require('webpack'); // Import webpack
const { VueLoaderPlugin } = require('vue-loader');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const port = 8081;

/**
 * MicroAppOne utilizes WebPack's library export feature to expose a single
 * global variable to the window object. This variable is then used to
 * bootstrap the application.
 *
 * library is the name of the global variable that will be exposed to the
 * window object. libraryTarget is the type of export. libraryExport is the
 * name of the export.
 */

module.exports = {
  mode: 'development',
  cache: false,
  devtool: 'source-map',
  target: 'web',
  optimization: {
    minimize: false,
  },
  entry: path.resolve(__dirname, './src/main.ts'),
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: `http://localhost:${port}/`,
    library: 'microAppOne',
    libraryTarget: 'window',
    libraryExport: 'default',
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
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './public/index.html'),
      chunks: ['main'],
    }),
    new webpack.ProvidePlugin({
      process: 'process/browser',
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
