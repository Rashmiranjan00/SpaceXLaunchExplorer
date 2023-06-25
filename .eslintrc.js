module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
        'react-native/react-native': true,
        jest: true,
    },
    settings: {
        react: { version: 'detect' },
        'import/resolver': {
            typescript: {},
        },
    },
    extends: [
        'plugin:react/recommended',
        'standard-with-typescript',
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier',
        'airbnb',
        'airbnb-typescript',
        'airbnb/hooks',
        'plugin:prettier/recommended',
        'prettier',
    ],
    // overrides: [
    //   {
    //     env: {
    //       node: true
    //     },
    //     files: [
    //       '.eslintrc.{js,cjs}'
    //     ],
    //     parserOptions: {
    //       sourceType: 'script'
    //     }
    //   }
    // ],
    parserOptions: {
        ecmafeatures: { jsx: true },
        ecmaVersion: 'latest',
        project: ['./tsconfig.json', './packages/*/tsconfig.json'],
        tsconfigRootDir: __dirname,
        sourceType: 'module',
    },
    plugins: ['react', '@typescript-eslint', 'react-native', 'prettier'],
    rules: {
        'react/jsx-filename-extension': [
            'error',
            { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
        ],
        'prettier/prettier': [
            'error',
            {
                singleQuote: false,
                trailingComma: 'none',
                endOfLine: 'auto',
            },
        ],
        'react/function-component-definition': 0,
        'import/no-named-as-default': 0,
        'no-use-before-define': 'off',
        'import/no-extraneous-dependencies': [
            'error',
            { devDependencies: true },
        ],
        '@typescript-eslint/no-use-before-define': ['off'],
        '@typescript-eslint/strict-boolean-expressions': ['off'],
        '@typescript-eslint/explicit-function-return-type': ['off'],
        '@typescript-eslint/consistent-type-assertions': ['off'],
        'import/extensions': ['error', 'never'],
        'react/prop-types': 0,
        'no-shadow': 'off',
        '@typescript-eslint/no-shadow': ['error'],
        'react/require-default-props': 0,
        'import/prefer-default-export': 0,
        'jsx-a11y/anchor-is-valid': 0,
        'react/jsx-props-no-spreading': 0,
        'no-param-reassign': [
            'error',
            { props: true, ignorePropertyModificationsFor: ['state'] },
        ],
        //These two need to be disabled for mocking tests
        '@typescript-eslint/no-var-requires': 0,
        'global-require': 0,
        '@typescript-eslint/ban-ts-comment': 0,
    },
};
