// @ts-check

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (_, { mode }) => {
  const devMode = mode !== 'production';

  /** @type {import('webpack').Configuration} */
  const config = {
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js',
      publicPath: '/',
    },
    mode,
    resolve: {
      extensions: ['.js', '.jsx'],
      alias: {
        '@assets': path.resolve(__dirname, 'src/assets'),
        '@components': path.resolve(__dirname, 'src/components'),
        '@context': path.resolve(__dirname, 'src/context'),
        '@hooks': path.resolve(__dirname, 'src/hooks'),
        '@pages': path.resolve(__dirname, 'src/pages'),
        '@services': path.resolve(__dirname, 'src/services'),
        '@styles': path.resolve(__dirname, 'src/styles'),
      },
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
          },
        },
        {
          test: /\.css/,
          use: [
            devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
            'css-loader',
            'postcss-loader',
          ],
        },
        {
          test: /\.(png|svg|jpg|gif)$/,
          type: 'asset',
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './public/index.html',
        filename: 'index.html',
      }),
      new MiniCssExtractPlugin({
        filename: '[name].css',
      }),
    ],
    devServer: {
      port: 3000,
      historyApiFallback: true,
    },
  };

  return config;
};
