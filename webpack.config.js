/**
 * Webpack configuration
 *
 * Created on March 22, 2020
 * @author Ralph Florent <ralflornt@gmail.com>
 */
const path = require('path');

module.exports = {
    name: '@namefully/react',
    mode: 'production',

    // Enable sourcemaps for debugging webpack's output.
    devtool: 'source-map',

    entry: {
        'index': './src/index.tsx',
    },

    output: {
        /* path: used by webpack for generated files */
        path: path.join(__dirname, '/dist'),
        filename: '[name].js'
    },

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        modules: ['node_modules', path.join(__dirname, 'src')],
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
    },

    module: {
        rules: [
            {
                test: /\.ts(x?)$/,
                exclude: /node_modules/,
                use: ['ts-loader']
            },
            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            {
                test: /\.js(x?)$/,
                enforce: 'pre',
                exclude: /node_modules/,
                use: 'source-map-loader'
            },
        ]
    },

    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
    externals: {
        react: 'React',
        'react-dom': 'ReactDOM',
        // 'namefully': 'namefully'
    }
};
