module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: "airbnb",
  parser: 'babel-eslint',
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'jsx-a11y'
  ],
  rules: {
    "react/jsx-props-no-spreading": "off",
    "linebreak-style": [
      "error",
      "unix"
    ],
    "max-len": [1, 120, 2, { ignoreComments: true }],
    "indent": [
      2,
      2,
      {
        "SwitchCase": 1
      }
    ],
    "quotes": [
      2,
      "single",
    ],
    "comma-dangle": [
      2,
      "always-multiline"
    ],
    "operator-linebreak": [
      2,
      "before",
      {
        "overrides": {
          "&&": "after",
          "?": "after",
          ":": "after"
        }
      }
    ],
    "import/no-extraneous-dependencies": "0",
    "no-console": "error"
  },
};
