// webpack.config.js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',  // Entry point of your application
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',  // The bundled output file
        clean: true,  // Cleans the output directory before building
    },
    mode: 'development',  // You can change this to 'production' for the final build
    devtool: 'inline-source-map',  // For debugging
    module: {
        rules: [
            {
                test: /\.css$/,  // For CSS files
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg)$/i,  // For image files
                type: 'asset/resource',
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './dist/index.html',  // The HTML file to inject the bundle into
            inject: 'body',
        }),
    ],
    devServer: {
        static: path.join(__dirname, 'dist'),  // The folder served by the dev server
        compress: true,  // Enable gzip compression
        port: 9000,  // The port to run the server
        hot: true,  // Enable hot module replacement
    },
};
