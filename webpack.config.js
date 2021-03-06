const path = require('path');

module.exports = {
	entry: "./src/main.js",
	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, 'dist')
	},
	module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            },
            { test: /\.html$/, loader: 'html-loader' }
        ]
    },
    stats: {
        colors: true
    },
    devtool: 'source-map'
}