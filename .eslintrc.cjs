module.exports = {
  parser: '@typescript-eslint/parser',
  root: true,
  env: { browser: true, es2020: true },
  extends: ['airbnb', 'prettier', 'airbnb/hooks', 'plugin:@typescript-eslint/recommended'],
  ignorePatterns: ['dist', 'eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh', 'prettier'],
  rules: {
    // 'no-unused-vars': 'on',
    'prettier/prettier': ['error'],
    // 'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-uses-react': 'off',
    'import/extensions': 'off',
  },
}
