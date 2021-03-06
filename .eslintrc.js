module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 13,
    sourceType: "module",
  },
  plugins: ["@typescript-eslint"],
  rules: {
    indent: ["error", "space"],
    "linebreak-style": ["error", "unix"],
    "no-console": "warn",
    quotes: ["error", "single"],
    semi: ["error", "never"],
  },
};
