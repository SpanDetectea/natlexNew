const path = require('path');
const webpack = require('webpack');
module.exports = {
    entry: './src/index.js',
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"]
    },
    // resolve: {
    //     // Add '.jsx' as a resolvable extension.
    //     extensions: ['', '.webpack.js', '.web.js', '.jsx']
    //   },
    module: {
        rules: [
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
            { test: /\.js$/, loader: 'babel-loader', query: { presets: ['es2015', 'react'] }}
        ]
    },
    stats: {
        colors: true
    },
    devtool: 'source-map'
};