const path = require('path')
const webpack = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const TerserJSPlugin = require('terser-webpack-plugin')

module.exports = {
    name: '@namefully/react',
    mode: 'production',
    devtool: 'source-map',
    entry: {
        react: './src/index.ts',
        'react.min': './src/index.ts',
    },
    output: {
        path: path.join(__dirname, '/dist/umd'),
        filename: '[name].js',
        libraryTarget: 'umd',
        library: 'namefully',
        umdNamedDefine: true,
    },
    resolve: {
        modules: ['node_modules', path.join(__dirname, 'src')],
        extensions: ['.js', 'jsx', '.ts', '.tsx'],
    },
    externals: {
        react: 'React',
        'react-dom': 'ReactDOM',
        namefully: 'namefully',
    },
    optimization: {
        minimize: true,
        minimizer: [new TerserJSPlugin({ include: /\.min\.js$/ })],
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
        ],
    },
    plugins: [new webpack.NoEmitOnErrorsPlugin(), new CleanWebpackPlugin()],
}
