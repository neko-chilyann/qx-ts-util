module.exports = {
    parser: '@typescript-eslint/parser',
    extends: ['prettier/@typescript-eslint', 'plugin:@typescript-eslint/recommended'],
    plugins: ['@typescript-eslint'],
    env: {
        browser: true,
        node: true,
    },
    //指定ESLint可以解析JSX语法
    parserOptions: {
        ecmaVersion: 2019,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    rules: {
        '@typescript-eslint/no-explicit-any': [0],
        '@typescript-eslint/explicit-module-boundary-types': [0],
        '@typescript-eslint/no-empty-function': [0],
        '@typescript-eslint/no-non-null-assertion': [0],
        '@typescript-eslint/no-unused-vars': [0, { varsIgnorePattern: 'h|Component|__stencil_registerInstance' }],
        'prefer-rest-params': [0],
    },
};
