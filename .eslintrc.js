module.exports = {
  root: true,

  env: {
    node: true,
    es2022: true
  },

  rules: {
    'no-console': 'off',
    'no-debugger': 'off'
  },


  extends: ['plugin:vue/strongly-recommended', '@vue/prettier']
};
