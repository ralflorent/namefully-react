/**
 * Production configuration for the bundler
 *
 * Created on March 25, 2020
 * @author Ralph Florent <ralflornt@gmail.com>
 */

/* Handle OS path resolution: absolute, relative paths */
const path = require('path');

/* To access webpack runtime */
const webpack = require('webpack');

/* Cleaner for the context path: .dist/ (no need for rimraf) */
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

/* Minimizer */
const TerserJSPlugin = require('terser-webpack-plugin');

// Merge this with common configuration
module.exports = {
    name: '@namefully/react',
    mode: 'production',
    devtool: 'source-map',

    entry: {
        'react': './src/index.ts',
        'react.min': './src/index.ts'
    },

    output: {
        path: path.join(__dirname, '/dist/umd'),
        filename: '[name].js',
        libraryTarget: 'umd',
        library: 'namefully',
        umdNamedDefine: true
    },

    resolve: {
        modules: ['node_modules', path.join(__dirname, 'src')],
        extensions: ['.js', 'jsx', '.ts', '.tsx'],
    },

    externals: {
        react: 'React',
        'react-dom': 'ReactDOM',
    },

    optimization: {
        minimize: true,
        minimizer: [
            new TerserJSPlugin({
                include: /\.min\.js$/,
            }),
        ],
    },

    module: {
        // Allows to specify several loaders within the webpack configuration
        rules: [
            {
                test: /\.ts(x?)$/,
                exclude: /node_modules/,
                use: ['ts-loader']
            },
            // All output '.js' files will have any sourcemaps re-processed by
            // 'source-map-loader'.
            {
                test: /\.js(x?)$/,
                enforce: 'pre',
                exclude: /node_modules/,
                use: 'source-map-loader'
            },
        ]
    },

    plugins: [
        new webpack.NoEmitOnErrorsPlugin(),
        new CleanWebpackPlugin(),
    ]
};