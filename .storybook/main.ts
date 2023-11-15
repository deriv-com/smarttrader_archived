import path from 'path';
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';
import { fileURLToPath } from 'url';
import tailwind from 'tailwindcss';
import autoprefixer from 'autoprefixer';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default {
    stories: ['../**/*.stories.@(ts|tsx)'],
    framework: '@storybook/react-webpack5',
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
        '@storybook/addon-onboarding',
    ],
    docs: {
        autodocs: 'tag',
    },
    webpackFinal: async config => {
        config.module.rules.push({
            test: /\.css$/,
            use: [
                {
                    loader: 'postcss-loader',
                    options: {
                        postcssOptions: {
                            plugins: [tailwind, autoprefixer],
                        },
                    },
                },
            ],
            include: path.resolve(dirname, '../'),
        });
        if (config.resolve) {
            config.resolve.plugins = [new TsconfigPathsPlugin()];
        }

        return config;
    },
};
