import path from 'path';
import TerserPlugin from 'terser-webpack-plugin';
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { fileURLToPath } from 'url';
import { Configuration as WebpackConfiguration } from 'webpack';
import { Configuration as WebpackDevServerConfiguration } from 'webpack-dev-server';

interface Configuration extends WebpackConfiguration {
    devServer?: WebpackDevServerConfiguration;
}

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

const is_release =
    process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'staging' || process.env.NODE_ENV === 'test';

const config: Configuration = {
    entry: {
        index: './src/main.tsx',
    },
    output: {
        filename: 'bundle.[contenthash].js',
        path: path.resolve(dirname, 'dist'),
        chunkFilename: '[name].[contenthash].bundle.js',
        libraryTarget: 'umd',
        clean: true,
        publicPath: '/',
        assetModuleFilename: '[name][ext]',
    },
    mode: is_release ? 'production' : 'development',
    devServer: {
        static: {
            directory: path.join(dirname, 'public'),
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
            Components: path.resolve(dirname, 'src/components'),
            Constants: path.resolve(dirname, 'src/constants'),
            Contexts: path.resolve(dirname, 'src/contexts'),
            Api: path.resolve(dirname, 'src/api'),
            Utils: path.resolve(dirname, 'src/utils'),
            Styles: path.resolve(dirname, 'src/styles'),
            Translations: path.resolve(dirname, 'src/translations'),
            Types: path.resolve(dirname, 'src/types'),
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
                test: /\.(js|jsx|tsx|ts)$/,
                exclude: /node_modules/,
                use: 'babel-loader',
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.css$/i,
                include: path.resolve(dirname, 'src'),
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
        ],
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
            minSize: 20000,
            maxSize: 230000,
            cacheGroups: {
                defaultVendors: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all',
                },
            },
        },
        minimize: is_release,
        minimizer: [new TerserPlugin({}), new CssMinimizerPlugin()],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
            filename: 'index.html',
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css',
            chunkFilename: '[id].[contenthash].css',
        }),
    ],
    devtool: is_release ? false : 'source-map',
};

export default config;
