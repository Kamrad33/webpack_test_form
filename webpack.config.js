const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const production = process.env.NODE_ENV == 'production';

module.exports = {
   
    entry: { webpackFormTestApp: path.resolve(__dirname, './src/index.js')},
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: production ? '[name].[contenthash].js' : '[name].js',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: { presets: ['@babel/env','@babel/preset-react'] },
            },
            {
                test: /\.s(a|c)ss$/,
                exclude: /node_modules/,
                use: [
                    production ? MiniCssExtractPlugin.loader : 'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            sourceMap :!production
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: production
                        }
                    }
                ]
            },
            {
                test: /\.svg$/,
                use: [
                  {
                    loader: "babel-loader"
                  },
                  {
                    loader: "react-svg-loader",
                    options: {
                      jsx: true // true outputs JSX tags
                    }
                  }
                ]
              },
        ],
    },
    resolve: {
      extensions:  ['*', '.js', '.jsx', '.scss','.svg'],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            title: 'Webpack form test',
            template: './src/index/html',
        }),
        new MiniCssExtractPlugin({
            filename: production ? '[name].[contenthash].css' : '[name].css'
        })
    ],
   
    devServer: {
        port:3001,
        hot: true,
    },
    mode: production ? 'production' : 'development',
}