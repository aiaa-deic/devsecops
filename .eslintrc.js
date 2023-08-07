/* eslint-env node */
// require("@rushstack/eslint-patch/modern-module-resolution")

module.exports = {
  env: {
    node: true,
    es6: true,
  },
  extends: [
    "airbnb-base",
    "plugin:import/typescript",
    "eslint:recommended",
    "prettier",
  ],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
    defineProps: "readonly",
    defineEmits: "readonly",
    defineExpose: "readonly",
    withDefaults: "readonly",
  },
  parserOptions: {
    ecmaVersion: 6,
    parser: "@typescript-eslint/parser",
    sourceType: "module",
    tsconfigRootDir: __dirname,
  },
  plugins: ["@typescript-eslint", "prettier", "import"],
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],
      },
      typescript: {
        alwaysTryTypes: true,
        project: ["src/frontend/tsconfig.json", "src/backend/tsconfig.json"],
      },
    },
  },
  ignorePatterns: ["node_modules/", "dist/", "**/local_db/"],
  rules: {
    "no-plusplus": "off",
    "prettier/prettier": "warn",
    "no-var": "error",
    "comma-dangle": ["error", "only-multiline"],
    "id-length": "off",
    "no-unused-vars": [2, { args: "all", argsIgnorePattern: "^_" }],
    "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
    "security/detect-object-injection": "off",
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: ["**/*.test.ts", "**/tests/*.ts"],
      },
    ],
    "import/prefer-default-export": "off",
    "import/extensions": [
      "warn",
      "ignorePackages",
      {
        ts: "never",
      },
    ],
    "no-shadow": "off",
    "@typescript-eslint/no-shadow": ["error"],
  },
  overrides: [
    {
      files: [
        "**/__tests__/*.{j,t}s?(x)",
        "**/tests/unit/**/*.spec.{j,t}s?(x)",
      ],
      env: {
        jest: true,
      },
    },
  ],
}
