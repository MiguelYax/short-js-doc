module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: 'airbnb-base',
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    camelcase: ['warn', {
      properties: 'never',
      ignoreDestructuring: true,
    }],
  },
};