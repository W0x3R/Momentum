const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

let mode = 'development'
if (process.env.NODE_ENV === 'production') {
	mode = 'production'
}
module.exports = {
	mode: mode,
	output: {
		filename: '[name].[contenthash].js',
		assetModuleFilename: "assets/[name][ext][query]",
		clean: true,
	},
	devServer: {
		open: true
	},
	performance: {
		hints: false, // отключить предупреждения о производительности
	},
	devtool: mode === 'development' ? 'source-map' : false,
	plugins:
		[
			new HtmlWebpackPlugin({
				template: "./src/index.html",
			}),
			new MiniCssExtractPlugin({
				filename: '[name].[contenthash].css'
			}),
			new CopyWebpackPlugin({
				patterns: [
					{ from: './src/images/fav-icons', to: 'assets/images/fav-icons' },
					{ from: './src/site.webmanifest', to: 'site.webmanifest' },
					{ from: './src/browserconfig.xml', to: 'browserconfig.xml' }
				],
			}),
		],
	module: {
		rules: [
			{
				test: /\.html$/i,
				loader: "html-loader",
			},
			{
				test: /\.(sa|sc|c)ss$/,
				use: [
					(mode === 'development') ? 'style-loader' :
						MiniCssExtractPlugin.loader,
					'css-loader',
					{
						loader: 'postcss-loader',
						options: {
							postcssOptions: {
								plugins: [
									[
										'postcss-preset-env'
									]
								]
							}
						}
					},
					'sass-loader'
				]
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: 'asset/resource',
				generator: {
					filename: 'assets/images/[name][ext]'
				}
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/i,
				type: 'asset/resource',
				generator: {
					filename: 'assets/fonts/[name][ext]'
				}
			},
			{
				test: /\.m?js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env']
					}
				}
			},
			{
				test: /\.(mp3|wav|ogg)$/i,
				type: 'asset/resource',
				generator: {
					filename: 'assets/sounds/[name][ext]'
				}
			},
		]
	},
	optimization: {
		minimize: mode === 'production' ? true : false,
		minimizer: [
			new TerserPlugin({
				terserOptions: {
					compress: {
						drop_console: true,
					},
					format: {
						comments: false,
					},
				},
			}),
		],
	},
}