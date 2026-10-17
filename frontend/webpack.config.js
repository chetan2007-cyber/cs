const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');

module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production';

  return {
    entry: './src/main.tsx',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: isProduction ? 'static/js/[name].[contenthash:8].js' : 'static/js/[name].js',
      chunkFilename: isProduction ? 'static/js/[name].[contenthash:8].chunk.js' : 'static/js/[name].chunk.js',
      publicPath: '/',
      clean: true,
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
    module: {
      rules: [
        {
          test: /\.(ts|tsx|js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                ['@babel/preset-env', { targets: 'defaults' }],
                ['@babel/preset-react', { runtime: 'automatic' }],
                '@babel/preset-typescript',
              ],
            },
          },
        },
        {
          test: /\.css$/,
          use: [
            isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
            {
              loader: 'css-loader',
              options: { importLoaders: 1 },
            },
            'postcss-loader',
          ],
        },
        {
          test: /\.(png|jpe?g|gif|svg|webp|ico)$/i,
          type: 'asset/resource',
          generator: {
            filename: 'static/media/[name].[hash:8][ext]',
          },
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/i,
          type: 'asset/resource',
          generator: {
            filename: 'static/fonts/[name].[hash:8][ext]',
          },
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './public/index.html',
        inject: true,
        favicon: undefined,
      }),
      new webpack.DefinePlugin({
        'process.env.API_BASE_URL': JSON.stringify(process.env.API_BASE_URL || '/api/v1'),
        'process.env.NODE_ENV': JSON.stringify(isProduction ? 'production' : 'development'),
      }),
      ...(isProduction
        ? [
            new MiniCssExtractPlugin({
              filename: 'static/css/[name].[contenthash:8].css',
            }),
          ]
        : []),
    ],
    devServer: {
      port: 3001,
      host: '0.0.0.0',
      historyApiFallback: true, // Essential for React Router direct URL routing & refresh
      hot: true,
      open: false,
      proxy: [
        {
          context: ['/api'],
          target: 'http://localhost:5050',
          changeOrigin: true,
        },
      ],
      client: {
        overlay: {
          errors: true,
          warnings: false,
        },
      },
    },
    optimization: {
      splitChunks: {
        chunks: 'all',
        name: false,
      },
      runtimeChunk: 'single',
    },
    performance: {
      hints: false,
    },
    devtool: isProduction ? 'source-map' : 'cheap-module-source-map',
  };
};
