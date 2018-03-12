module.exports = {
  extends: ['eslint:recommended', 'google'],
  parserOptions: {
    ecmaVersion: 8,
  },
  env: {
    es6: true,
    node: true,
    jest: false,
  },
  rules: {
    'indent': ['error', 2],
    'spaced-comment': ['error', 'always', {markers: ['/']}],
    'no-console': 'warn',
    'valid-jsdoc': 'off',
    'require-jsdoc': 'off',
  },
};
