module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: ['eslint:recommended', '@vitejs/plugin-react/recommended'],
  ignorePatterns: ['dist', '.eslintrc.cjs', 'node_modules', 'api'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
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
  },
}
