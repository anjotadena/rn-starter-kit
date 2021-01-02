module.exports = {
  extends: ["plugin:react/recommended", "airbnb"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["detox", "jest", "prettier"],
  env: {
    es2021: true,
    "detox/detox": true,
    "jest/globals": true,
  },
  rules: {
    "react/prop-types": "off",
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: true,
        optionalDependencies: false,
        peerDependencies: false,
      },
    ],
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    "func-names": 0,
    quotes: ["error", "double"],
    "jsx-quotes": ["error", "single"],
  },
};
