//node_modules\.bin\webpack -d --watch
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname,'js');
var APP_DIR = path.resolve(__dirname,'dev');

var config ={
	entry:APP_DIR + '/index.jsx',
	output:{
		path:BUILD_DIR,
		filename:'index.js'
	},
	module:{
		loaders:[
			{
				test :/\.jsx?/,
				include :APP_DIR,
				loader :'babel-loader',
				query:{
					presets:['react', 'es2015']
				}
			}
		]
	}
};
module.exports = config;