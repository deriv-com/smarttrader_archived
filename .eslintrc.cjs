module.exports = {
    root: true,
    env: { browser: true, es2020: true },
    extends: ['@deriv/eslint-config-deriv', 'plugin:@typescript-eslint/recommended', 'plugin:storybook/recommended'],
    ignorePatterns: ['!.storybook', 'dist', '.eslintrc.cjs'],
    parser: '@typescript-eslint/parser',
    plugins: ['react-refresh'],
    rules: {
        'simple-import-sort/imports': 'off',
        'import/no-extraneous-dependencies': ['warn', { devDependencies: true }],
        'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    },
    settings: {
          react: {
            version: "detect"
        }
    }  
};
