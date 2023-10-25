import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

const ALIASES = {
    Components: resolve(__dirname, './src/components'),
    Constants: resolve(__dirname, './src/constants'),
    Contexts: resolve(__dirname, './src/contexts'),
    Api: resolve(__dirname, './src/api'),
    Utils: resolve(__dirname, './src/utils'),
    Styles: resolve(__dirname, './src/styles'),
    Translations: resolve(__dirname, './src/translations'),
    Types: resolve(__dirname, './src/types'),
};

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    /* Absolute path */
    resolve: { alias: ALIASES },
    server: {
        host: 'localhost',
        port: 42069,
    },
    /* vitest configs */
    test: {
        environment: 'jsdom',
        globals: true,
        setupFiles: ['./vitest.setup.ts'],
        coverage: {
            reporter: 'lcov',
            provider: 'v8',
        },
    },
});
