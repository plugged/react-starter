const OFF = 0;
// const WARNING = 1;
const ERROR = 2;
//
module.exports = {
  parser: 'babel-eslint',
  extends: 'airbnb',
  ecmaFeatures: {
    'jsx': true,
    'modules': true
  },
  env: {
    'browser': true,
    'node': true,
    //'jest': true,
    'es6': true
  },
  plugins: [
    //'redux-saga',
     'react',
     'jsx-a11y'

  ],
  rules: {
    'comma-dangle': OFF,
    'quotes': [ERROR, 'single', {avoidEscape: true, allowTemplateLiterals: true }],
    'strict': [ERROR, 'never'],
    'indent': [ERROR, 2, {'SwitchCase': 1}],
    'object-curly-spacing': OFF,
    'import/no-extraneous-dependencies': OFF,
    //'func-names': OFF,
    'react/prefer-stateless-function': OFF,
    'react/jsx-uses-react': ERROR,
    'react/jsx-uses-vars': ERROR,
    'react/react-in-jsx-scope': ERROR,
    'react/jsx-filename-extension': OFF,
    'react/self-closing-comp': OFF,
    'react/forbid-prop-types': OFF
  }
}
