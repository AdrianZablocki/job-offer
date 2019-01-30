const webpackMerge = require('webpack-merge');

const commonConfig = require('./webpack.config.js');

module.exports = webpackMerge(commonConfig, {
    mode: 'development',
    devtool: 'eval',
    module: {
        rules: [
            {
                test: /\.scss/,
                use: [
                    {
                        loader: 'style-loader',
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                            url: false
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            }
        ]
    },
    devServer: {
        host: '0.0.0.0',
        port: 4200,
        historyApiFallback: true,
        overlay: {
            warnings: true,
            errors: true
        }
    }
});
