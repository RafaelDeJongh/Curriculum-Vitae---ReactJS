//node_modules\.bin\webpack -d --watch
var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var BUILD_DIR = path.resolve(__dirname,'js');
var APP_DIR = path.resolve(__dirname,'dev');

var config ={
	entry:[
	"webpack-dev-server/client?http://localhost:3000",
	APP_DIR + '/index.jsx'
	],
	output:{
		path:BUILD_DIR,
		filename:'index.js',
		publicPath:'/'
	},
	module:{
		loaders:[
			{test:/\.jsx?/,loader:'babel-loader',query:{presets:['react','es2015']},include:APP_DIR}/*,
			{test:/\.scss?/,loader:'style-loader!css-loader!sass-loader?sourceMap',include:APP_DIR},
			{test:/\.css?/,loader:'style-loader!css-loader?sourceMap',include:APP_DIR}*/
		]
	}
};
module.exports = config;