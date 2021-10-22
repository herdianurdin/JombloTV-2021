const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                    },
                ],
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                use: ['file-loader?name=images/[name].[ext]', 'image-webpack-loader?bypassOnDebug'],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            favicon: 'src/images/icon.png',
            template: './src/index.html',
            filename: 'index.html',
            minify: 'production',
        }),
    ],
}
