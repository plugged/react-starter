const { resolve } = require('./webpack.config');

module.exports = {
  parser: 'babel-eslint',
  extends: 'airbnb',
  settings: {
    'import/resolver': {
      webpack: {
        config: {
          resolve
        }
      }
    }
  },
  env: {
    browser: true,
    node: true
  },
  rules: {
    quotes: ['error', 'single', { avoidEscape: true, allowTemplateLiterals: true }],
    'comma-dangle': ['error', 'never'],
    'react/jsx-filename-extension': 'off',
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['to', 'hrefLeft', 'hrefRight'],
        aspects: ['noHref', 'invalidHref', 'preferButton']
      }
    ]
  }
};
