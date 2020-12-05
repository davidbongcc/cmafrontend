var webpack = require('webpack');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const basepath = process.env.BASEPATH || '/x/'; // Root would be '/'
const formattedBasepath = basepath.replace(/(.+)\/$/, '$1'); // No trailing slash (unless length is 1)

module.exports = {
    mode: "production",
    entry: "./src/index.tsx",
    output: {
        filename: "[name].[contenthash].js",
        path: __dirname + "/dist",
        publicPath: basepath
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
        },
    },
    devtool: 'source-map',

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json", ".css"],
        plugins: [
            new TsconfigPathsPlugin({}),
            new ExtractTextPlugin({filename: '[name].css'}),
        ]
    },

    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'.
            { test: /\.tsx?$/, loader: "ts-loader", options: { allowTsInNodeModules: true } },

            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },

            // All files with a '.css' extension will be handled by 'style-loader' and 'css-loader'.
            { test: /\.css$/, use:  ['style-loader', 'css-loader'] }
        ]
    },

    plugins: [
        new CopyWebpackPlugin([
            {
                from: 'node_modules/pdfjs-dist/cmaps/',
                to: 'cmaps/'
            },
            {
                from: 'style.css',
                to: 'style.css'
            },
            {
                from: 'img/KPMGBlue.png',
                to: 'img/KPMGBlue.png'
            },
        ]),
        new HtmlWebpackPlugin({
            title: 'Template - React',
            template: 'template.html'
        }),
        new BundleAnalyzerPlugin({
            analyzerMode: "static",
            generateStatsFile: true,
            defaultSizes: 'gzip',
            openAnalyzer: false
        }),
        new webpack.DefinePlugin({
            API_URL: JSON.stringify(basepath.replace(/\/$/, '') + '/webapi/webapi/v1/'), // kubernetes ingress does path rewrite...
            BASEPATH: JSON.stringify(formattedBasepath),
            PRODUCTION: true,
            VERSION_TAG: JSON.stringify(process.env.VERSION_TAG || '...'),
        })
    ],
};
