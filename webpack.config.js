var path = require("path");
var webpack = require("webpack");

module.exports = {
	entry: './src/index.js',
	output: {
		path: __dirname + '/public',
    	filename: 'bundle.js'
	},

	module: {
		loaders: [
		{
			test: /\.jsx?$/,
	   		exclude: /node_modules/,
	   		loader: "babel-loader"
	   	},
	   	{
			test: /\.json?$/,
	   		loader: "json-loader"
	  	}
	  ]
	 }
};