const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development';

module.exports = {
	mode: isDev ? 'development' : 'production',
	entry: path.resolve(__dirname, 'src', 'index.tsx'),
	output: {
		path: path.join(__dirname, 'build'),
		filename: '[name].bundle.js',
		chunkFilename: '[name].chunk.js',
		clean: true,
		publicPath: '/',
	},
	devServer: {
		hot: true,
		historyApiFallback: true,
		port: 3000,
	},
	module: {
		rules: [
			{
				test: /\.module\.s(a|c)ss$/,
				use: [
					MiniCssExtractPlugin.loader,
					{
						loader: 'css-loader',
						options: {
							modules: true,
							sourceMap: isDev,
						},
					},
					{
						loader: 'sass-loader',
						options: {
							sourceMap: isDev,
						},
					},
				],
			},
			{
				test: /\.s(a|c)ss$/,
				exclude: /\.module.(s(a|c)ss)$/,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader',
					{
						loader: 'sass-loader',
						options: {
							sourceMap: isDev,
						},
					},
				],
			},
			{
				test: /\.(jpg|jpeg|gif|png|svg)$/,
				type: 'asset/resource',
			},
			{
				test: /\.(ts|js)x?$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'babel-loader',
					},
				],
			},
		],
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
		alias: {
			app: path.resolve(__dirname, 'src/app'),
		},
	},
	optimization: {
		minimizer: [
			new CssMinimizerPlugin(),
			new TerserPlugin({
				terserOptions: {
					mangle: true,
				},
			}),
		],
	},
	performance: {
		hints: false,
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.join(__dirname, 'src', 'index.html'),
		}),
		new MiniCssExtractPlugin({
			filename: '[name].[contenthash].css',
		}),
	],
};
