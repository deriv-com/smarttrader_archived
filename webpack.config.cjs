const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// eslint-disable-next-line import/no-extraneous-dependencies
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const CopyPlugin = require('copy-webpack-plugin');

const is_release = false;

// process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'staging';

module.exports = {
    entry: {
        index: './src/main.tsx',
    },
    output: {
        filename: 'bundle.[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
        libraryTarget: 'umd',
        clean: true,
    },
    mode: is_release ? 'production' : 'development',
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        compress: true,
        port: 42069,
        hot: true,
        open: true,
        historyApiFallback: true,
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.css'],
        alias: {
            Components: path.resolve(__dirname, 'src/components'),
            Constants: path.resolve(__dirname, 'src/constants'),
            Contexts: path.resolve(__dirname, 'src/contexts'),
            Api: path.resolve(__dirname, 'src/api'),
            Utils: path.resolve(__dirname, 'src/utils'),
            Styles: path.resolve(__dirname, 'src/styles'),
            Translations: path.resolve(__dirname, 'src/translations'),
            Types: path.resolve(__dirname, 'src/types'),
        },
        symlinks: false,
    },
    module: {
        rules: [
            {
                test: /\.m?js/,
                include: /node_modules/,
                resolve: {
                    fullySpecified: false,
                },
            },
            {
                test: /\.(tsx|ts)?$/,
                use: [
                    {
                        loader: 'ts-loader',
                        options: {
                            compilerOptions: { noEmit: false },
                        },
                    },
                ],
                exclude: /node_modules/,
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env'],
                        },
                    },
                ],
            },
            {
                test: /\.css$/i,
                include: path.resolve(__dirname, 'src'),
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            esModule: false,
                            importLoaders: 2,
                            sourceMap: true,
                        },
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: true,
                        },
                    },
                ],
            },
            {
                test: /\.svg$/,
                include:path.resolve(__dirname,'public/images'),
                exclude: /node_modules/,
                use: 'file-loader',
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'fonts/[hash][ext][query]',
                },
            },
        ],
    },
    optimization: {
        splitChunks: {
            chunks: 'async',
            minSize: 20000,
            minRemainingSize: 0,
            minChunks: 1,
            maxAsyncRequests: 30,
            maxInitialRequests: 30,
            maxSize: 2500000,
            cacheGroups: {
                defaultVendors: {
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10,
                    reuseExistingChunk: true,
                },
                default: {
                    minChunks: 2,
                    priority: -20,
                    reuseExistingChunk: true,
                },
            },
        },
        minimize: is_release,
        minimizer: is_release
            ? [
                  new TerserPlugin({
                      test: /\.js$/,
                      parallel: 2,
                  }),
                  new CssMinimizerPlugin(),
              ]
            : [],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
            filename: 'index.html',
        }),
        new CopyPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, 'public'),
                    to: path.resolve(__dirname, 'dist'),
                },
            ],
        }),
        new BundleAnalyzerPlugin(),
        new ImageMinimizerPlugin({
            minimizer: {
                implementation: ImageMinimizerPlugin.svgoMinify,
                options: {
                    encodeOptions: {
                        // Pass over SVGs multiple times to ensure all optimizations are applied. False by default
                        multipass: true,
                        plugins: [
                            // set of built-in plugins enabled by default
                            // see: https://github.com/svg/svgo#default-preset
                            'preset-default',
                        ],
                    },
                },
            },
        }),
    ],
    devtool: is_release ? 'source-map' : 'eval-cheap-module-source-map',
};
