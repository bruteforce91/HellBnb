module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    allowImportExportEverywhere: false,
    codeFrame: true,
    ecmaFeatures: {
      jsx: false,
      js: true,
    },
  },
  extends: ["plugin:react/recommended", "airbnb", "prettier"],
  plugins: ["react", "prettier"],
  settings: {
    react: {
      version: "detect",
    },
  },
  parser: "babel-eslint",
  rules: {
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
    "react/prop-types": "off",
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    strict: 0,
  },
};
