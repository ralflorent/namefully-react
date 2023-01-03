const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    name: '@namefully/react',
    mode: 'development',
    devtool: 'inline-source-map',
    entry: {
        index: './demo/index.tsx',
    },
    output: {
        path: path.join(__dirname, '/demo'),
        filename: '[name].[hash:6].js',
    },
    resolve: {
        modules: ['node_modules', path.join(__dirname, 'src'), path.join(__dirname, 'demo')],
        extensions: ['.js', 'jsx', '.ts', '.tsx'],
    },
    module: {
        rules: [
            {
                test: /\.ts(x?)$/,
                exclude: /node_modules/,
                use: ['ts-loader'],
            },
            {
                test: /\.js(x?)$/,
                enforce: 'pre',
                exclude: /node_modules/,
                use: 'source-map-loader',
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: { hmr: true },
                    },
                    {
                        loader: 'css-loader',
                    },
                ],
            },
        ],
    },
    devServer: {
        host: '0.0.0.0',
        port: 3000,
        historyApiFallback: { disableDotRule: true },
        progress: true,
        hot: true,
        inline: true,
    },

    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].[hash:6].css',
            chunkFilename: '[id].[hash:6].css',
        }),
        new HtmlWebpackPlugin({
            title: `Namefully's Demo`,
            template: 'demo/index.html',
            baseUrl: '/',
        }),
    ],
}
