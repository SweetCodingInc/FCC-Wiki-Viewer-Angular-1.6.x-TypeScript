const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const config = {
    devtool:'source-map',
    context: path.join(__dirname,'/'),
    entry:{
        vendors:'./src/vendors.ts',
        app: './src/app.ts',
    },
    output:{
        path: path.join(__dirname,'dist'),
        filename:'[name]-bundle.js'
    },
    resolve:{
        extensions: ['.ts', '.js']
    },
    module:{
        loaders:[
            {test: /\.ts$/, exclude:/node_modules/ , loader:['ts-loader']}
        ]
    },
    plugins:[
        new CleanWebpackPlugin('dist'),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendors',
            filename: '[name]-bundle.js',
            minChunks: Infinity
        }),
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        })
    ]
}

module.exports = config;