const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');

module.exports = {
	devtool: 'eval',
	entry: [
		'react-hot-loader/patch',
		'webpack-dev-server/client?http://localhost:3000',
		'webpack/hot/only-dev-server',
		'./src/index'
	],
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'bundle.js',
		publicPath: '/static/'
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	],
	resolve: {
		root: path.join(__dirname, 'src'),
		extensions: ['', '.js', '.jsx']
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				loaders: ['babel'],
				include: path.join(__dirname, 'src')
			},
			{
				test: /(\.css|\.scss)$/,
				loaders: ['style', 'css?sourceMap', 'postcss', 'sass?sourceMap']
			}
		]
	},
	postcss: ()=> [autoprefixer]
};
