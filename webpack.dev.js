/**
 * Development configuration for the bundler
 *
 * Created on March 24, 2020
 * @author Ralph Florent <ralflornt@gmail.com>
 */

/* Handle OS path resolution: absolute, relative paths */
const path = require('path');

/* Extract raw text from a file */
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

/* Create an `index.html` page from a template file */
const HtmlWebpackPlugin = require('html-webpack-plugin');

/**
 * Merge this with common configuration
 */
module.exports = {
    name: '@namefully/react',
    mode: 'development',
    devtool: 'inline-source-map',

    entry: {
        'index': './demo/index.tsx',
    },

    output: {
        /* path: used by webpack for generated files */
        path: path.join(__dirname, '/demo'),
        filename: '[name].[hash:6].js',
    },

    resolve: {
        modules: [
            'node_modules',
            path.join(__dirname, 'src'),
            path.join(__dirname, 'demo')
        ],
        extensions: ['.js', 'jsx', '.ts', '.tsx'],
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
            {
                test: /\.css$/,
                /* Loaders are evaluated/executed from right to left (or from
                 * bottom to top) and otherwise if `Pitching` mode is enforced.
                 */
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: { hmr: true, },
                    },
                    {
                        loader: 'css-loader'
                    }
                ]
            },
        ]
    },
    /*  Options passed on the command line (package.json::start) as the dev
     *  server does not have access to the webpack config
     */
    devServer: {
        host: '0.0.0.0',
        port: 3000,
        // SPAs only rely on a single index.html, this handles all requests
        // disableDotRule, don't consider URL including dots as static resource
        historyApiFallback: {
            disableDotRule: true
        },
        progress: true, // output running progress to console
        hot: true, // enable webpack's Hot Module Replacement feature
        inline: true, // live reloading, build messages for the browser console.
    },

    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].[hash:6].css',
            chunkFilename: '[id].[hash:6].css',
        }),
        new HtmlWebpackPlugin({
            title: `Namefully's Demo`,
            template: 'demo/index.html',
            baseUrl: '/'
        }),
    ],
};
