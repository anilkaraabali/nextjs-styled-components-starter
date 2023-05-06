const importSort = {
  'simple-import-sort/imports': [
    'error',
    {
      groups: [['^\\u0000', '^@?\\w'], ['^(mocks|stubs)'], ['^@/*'], ['^'], ['^\\.']],
    },
  ],
};

module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  plugins: ['simple-import-sort', '@typescript-eslint', 'testing-library'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@next/next/recommended',
    'next/core-web-vitals',
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    '@next/next/no-img-element': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'off',
    'react/display-name': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    ...importSort,
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        ecmaVersion: 12,
        sourceType: 'module',
        project: ['./tsconfig.json'],
        tsconfigRootDir: __dirname,
      },
    },
    {
      files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
      extends: ['plugin:testing-library/react'],
      rules: {
        ...importSort,
      },
    },
  ],
};
