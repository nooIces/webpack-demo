var path = require("path");
var htmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
	entry: './src/app.jsx',
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: 'js/[name].js',
		chunkFilename: 'js/[name].js'
	},
	devServer: {
    	contentBase: './dist'
    },
	module: {
		rules: [
			{
				test: /\.less$/,
				loader: 'style-loader!css-loader!less-loader'
			},
			{
				test: /.\jsx?$/,
				loader: "babel-loader",
				include: /src/,
				exclude: /node_modules/,
				query: {
					presets: ["react", "es2015", "stage-0"]
				}
			}
		]
	},
	plugins: [
	    new htmlWebpackPlugin({
	    	template: "index.html",
	    	filename: "index.html",
	    	inject: "body",
	    	title: "德玛西亚"
	    })
	]
}
