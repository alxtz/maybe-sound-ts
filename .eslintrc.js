module.exports = {
  root: true,
  env: {
    es2020: true,
    node: true,
    jest: true,
  },
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "no-type-assertion"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "prettier",
  ],
  parserOptions: {
    tsconfigRootDir: ".",
    project: "./tsconfig.json",
  },
  rules: {
    "no-type-assertion/no-type-assertion": "error",
    "no-inner-declarations": 0,
    "no-debugger": 2,
    "no-console": 0,
    eqeqeq: 2,
    radix: 2,
    "no-dupe-keys": 2,
    "@typescript-eslint/prefer-readonly-parameter-types": 2,
    "@typescript-eslint/explicit-module-boundary-types": 2,
    "@typescript-eslint/no-unused-vars": 0,
    "@typescript-eslint/no-explicit-any": 2,
    "@typescript-eslint/no-unsafe-assignment": "error",
    "@typescript-eslint/no-unsafe-argument": 2,
    "@typescript-eslint/no-unsafe-call": "error",
    "@typescript-eslint/no-useless-constructor": 2,
    "@typescript-eslint/no-unsafe-member-access": "error",
    "@typescript-eslint/no-unsafe-return": "error",
    "@typescript-eslint/prefer-readonly": 2,
    "@typescript-eslint/explicit-member-accessibility": [
      "error",
      {
        accessibility: "explicit",
        overrides: {
          accessors: "explicit",
          constructors: "no-public",
          methods: "explicit",
          properties: "explicit",
          parameterProperties: "explicit",
        },
      },
    ],
    "@typescript-eslint/lines-between-class-members": 2,
  },
  overrides: [
    {
      files: ["*.test.ts"],
      rules: {
        "@typescript-eslint/unbound-method": [0],
      },
    },
  ],
};
