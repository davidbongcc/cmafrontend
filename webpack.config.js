var webpack = require('webpack');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');


module.exports = {
    mode: "development",
    entry: "./src/index.tsx",
    output: {
        filename: "bundle.js",
        path: __dirname + "/dist",
        // publicPath: "/cms/"  ### To uncomment when production
        publicPath:'/dist'
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    devServer: {
        port: 8080,
        disableHostCheck: true,
        historyApiFallback: {
            index: 'index.html'
        },
        publicPath: '/dist',
        // publicPath: '/cms/',  ### To uncomment this when production
    },

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json", ".css"],
        plugins: [
            new TsconfigPathsPlugin({}),
            new ExtractTextPlugin({filename: '[name].css'}),
        ],
        alias: {
            "styled-components": path.resolve("./node_modules", "styled-components"),
        }
    },

    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'.
            { test: /\.tsx?$/, loader: "ts-loader" },

            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },

            // All files with a '.css' extension will be handled by 'style-loader' and 'css-loader'.
            { test: /\.css$/, use:  ['style-loader', 'css-loader'] },

            //All monaco files with a '.css' extension will be handled by 'style-loader' and 'css-loader'.
            //{ test: /\.css$/, include: MONACO_DIR, use: ['style-loader', 'css-loader'] },
        ],
    },

    plugins: [
        new CopyWebpackPlugin([
            {
                from: 'node_modules/pdfjs-dist/cmaps/',
                to: 'cmaps/'
            },
            {
                from: 'style.css',
                to: 'cms/style.css'
            },
            {
                from: 'img/KPMGBlue.png',
                to: 'cms/img/KPMGBlue.png'
            },
        ]),

        new webpack.DefinePlugin({
            API_URL: JSON.stringify('/webapi/v1/'),
            BASEPATH: JSON.stringify('/cms'),
            PRODUCTION: false,
            VERSION_TAG: JSON.stringify('dev'),
        })
    ]
};
