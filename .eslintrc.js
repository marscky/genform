module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/airbnb',
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'comma-dangle': ['error', 'never'],
    'space-before-function-paren': ['error', 'always'],
    'no-plusplus': ['error', { 'allowForLoopAfterthoughts': true }],
    'arrow-parens': ['error', 'as-needed'],
    'no-underscore-dangle': 'off',
    'no-alert': 'off',
    'consistent-return': 'off'
  }
};
