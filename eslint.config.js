const { defineConfig } = require('eslint/config')
const react = require('eslint-plugin-react')
const reactHooks = require('eslint-plugin-react-hooks')
const reactRefresh = require('eslint-plugin-react-refresh')

module.exports = defineConfig([
  {
    files: ['frontend/**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        console: 'readonly',
        window: 'readonly',
        document: 'readonly',
        navigator: 'readonly',
        localStorage: 'readonly',
        fetch: 'readonly',
      },
    },
    settings: {
      react: {
        version: '18.2',
      },
    },
    plugins: {
      react: react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      'no-console': [
        'error',
        {
          allow: ['error'],
        },
      ],
    "react/react-in-jsx-scope": "off",
    },
  },
  {
    ignores: ['dist', 'node_modules', 'api'],
  },
])
