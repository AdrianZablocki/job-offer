const webpackMerge = require('webpack-merge');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const commonConfig = require('./webpack.config.js');

module.exports = webpackMerge(commonConfig, {
    mode: 'production',
    devtool: 'none',
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                sourceMap: false,
                uglifyOptions: {
                    warnings: false,
                    comments: true,
                    compress: {
                        drop_console: true
                    }
                }
            }),
        ],
    },
    performance: {
        assetFilter: (assetFilename) => assetFilename.endsWith('.js')
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            url: false
                        }
                    },
                    {
                        loader: 'postcss-loader'
                    },
                    {
                        loader: 'sass-loader'
                    }
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name]/styles.[hash].css'
        })
    ]
});
