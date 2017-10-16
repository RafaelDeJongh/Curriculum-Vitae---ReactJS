//node_modules\.bin\webpack -d --watch
//node_modules/webpack-dev-server/bin/webpack-dev-server.js --inline --hot
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'build');
var APP_DIR = path.resolve(__dirname, 'dev');

var config ={
	entry:APP_DIR + '/index.jsx',
	output:{
		path:BUILD_DIR,
		filename:'index.js'
	},
	module :{
		loaders :[
			{
				test :/\.jsx?/,
				include :APP_DIR,
				loader :'babel-loader',
				query:{
					presets:['react', 'es2015']
				}
			},
			{
				test:/\.scss$/,
				loader:ExtractTextPlugin.extract('css!sass')
			}
		]
	},
	plugins:[
		new ExtractTextPlugin('build/styles.css',{
			allChunks:true
		})
	]
};
module.exports = config;