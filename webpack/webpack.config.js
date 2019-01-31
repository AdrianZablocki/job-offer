const path = require('path');

const TSLintPlugin = require('tslint-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const helpers = require('./helpers');

const entry = {
	main: helpers.APP_DIR + '/main.ts',
	polyfills: helpers.APP_DIR + '/polyfills.ts',
};

module.exports = {
	entry,
	output: {
		filename: (chunkData) => {
			switch (chunkData.chunk.name) {
				case 'main':
					return 'main.js';
				case 'polyfills':
					return 'polyfills.js';
				default:
					return '[name]/main.[contenthash].js';
			}
		}
	},
	resolve: {
		extensions: ['.js', '.ts'],
		modules: [
			helpers.NODE_DIR,
			helpers.APP_DIR
		]
	},
	module: {
		rules: [
			{
				test: [/.js$|.ts$/],
				use: {
					loader: 'babel-loader'
				}
			}
		]
	},
	plugins: [
		new TSLintPlugin({
			files: ['./src/**/*.ts']
		}),
		new CopyWebpackPlugin([
			{
				from: 'src/assets/images',
				to: 'assets/images'
			}
		]),
		new HtmlWebpackPlugin({
			template: path.join(helpers.APP_DIR, 'index.html'),
			inject: false,
			minify: {
				collapseWhitespace: true,
				removeComments: true
			},
			chunks: ['main']
		})
	],
};
