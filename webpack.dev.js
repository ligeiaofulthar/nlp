const path = require('path')
const webpack = require('webpack')
const HtmlWebPackPlugin = require("html-webpack-plugin")
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    entry: './src/client/index.js',
    mode: 'development',
    devtool: 'source-map',
    stats: 'verbose',
    // output: {
    //     filename: 'bundle.js',
    //     path: path.resolve(__dirname, 'dist'),
    //   },
    //   resolve: {
    //     // Add `.ts` and `.tsx` as a resolvable extension.
    //     extensions: [".ts", ".tsx", ".js", ".css", ".scss"]
    // },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.(s*)css$/,
                loader: ['style-loader', 'css-loader', 'sass-loader']
            },
                {
                  test: /\.css$/i,
                  use: [MiniCssExtractPlugin.loader, 'css-loader'],
                }
                                // use: [
                //     {
                //         loader: 'file-loader',
                //         options: {
                //             name: '[name].css',
                //             outputPath: 'assets/css'
                //         },
                //     },
                //     {
                //     loader: 'style-loader'
                //     },
                //     {loader: 'css-loader'},

                //     {loader: 'sass-loader'}
                // ]
            //}
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/client/views/index.html",
            filename: "./index.html",
        }),
        new CleanWebpackPlugin({
            // Simulate the removal of files
            dry: true,
            // Write Logs to Console
            verbose: true,
            // Automatically remove all unused webpack assets on rebuild
            cleanStaleWebpackAssets: true,
            protectWebpackAssets: false
        }),
        new MiniCssExtractPlugin({
                    filename: '[name].css',
            chunkFilename: '[name].css'
        })

   ]
}
