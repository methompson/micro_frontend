module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    'eslint:recommended',
    '@vue/typescript/recommended',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    semi: 'off',
    eqeqeq: ['error'],
    quotes: ['error', 'single'],
    'no-restricted-syntax': 0,
    'class-methods-use-this': 'off',
    'no-continue': 'off',
    'no-plusplus': 'off',
    'max-len': [
      1,
      {
        ignoreStrings: true,
        code: 120,
        comments: 120,
      },
    ],
    'arrow-body-style': ['error', 'as-needed'],
    'arrow-parens': ['error', 'always'],
    'no-empty': [
      'error',
      {
        allowEmptyCatch: true,
      },
    ],
    'no-multiple-empty-lines': [
      'error',
      {
        max: 1,
        maxEOF: 1,
        maxBOF: 0,
      },
    ],
    'no-trailing-spaces': 'error',
    'brace-style': ['error', '1tbs'],
    indent: 'off',
    'no-unused-vars': 'off',
    'no-empty-function': 'off',
    'max-classes-per-file': 'off',
    strict: 'off',
    camelcase: 'off',
    'no-console': 'warn',
    'import/no-extraneous-dependencies': 'off',
    'no-restricted-imports': [
      'warn',
      {
        patterns: [
          {
            group: ['../*'],
            message: 'Usage of relative parent imports is not allowed.',
          },
        ],
      },
    ],
    'no-underscore-dangle': 'off',
    'no-multi-spaces': [
      'error',
      {
        ignoreEOLComments: false,
      },
    ],
    'object-curly-newline': ['error', { ObjectPattern: { consistent: true } }],
    'comma-dangle': ['error', 'always-multiline'],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/require-await': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/restrict-template-expressions': 'off',
    '@typescript-eslint/no-unsafe-assignment': 'off',
    '@typescript-eslint/semi': ['error'],
    '@typescript-eslint/ban-types': ['error'],
    'vue/attribute-hyphenation': 'off',
    'vue/multi-word-component-names': 'off',
    '@typescript-eslint/no-inferrable-types': 'off',
  },
};
