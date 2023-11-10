/* eslint-disable global-require */

const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
    stories: ['../**/*.stories.@(ts|tsx)'],
    framework: '@storybook/react-webpack5',
    addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
    webpackFinal: async config => {
        config.module.rules.push({
            test: /\.css$/,
            use: [
                {
                    loader: 'postcss-loader',
                    options: {
                        postcssOptions: {
                            plugins: [require('tailwindcss'), require('autoprefixer')],
                        },
                    },
                },
            ],
            include: path.resolve(__dirname, '../'),
        });
        if (config.resolve) {
            config.resolve.plugins = [new TsconfigPathsPlugin()];
        }

        return config;
    },
};
