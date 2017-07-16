var path = require("path");
var htmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
	entry: './src/script/main.js',
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: 'js/[name]-[chunkhash].js'
	},
	plugins: [
	    new htmlWebpackPlugin({
	    	template: "index.html",
	    	filename: "html/index.html",
	    	inject: "head",
	    	title: "德玛西亚"
	    })	    	
	]
}