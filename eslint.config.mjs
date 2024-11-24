import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import globals from "globals";
import tseslint from "typescript-eslint";

/** @type {import('eslint').Linter.Config[]} */
export default [
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    name: "react",
    ...pluginReact.configs.flat.recommended,
    settings: {
      react: {
        version: "detect",
      },
    },
  },
  {
    name: "d2c-custom",
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.es2023,
        $D2C_API_KEY: "readonly",
        $D2C_OAUTH_CLIENT_ID: "readonly",
        $D2C_OAUTH_CLIENT_SECRET: "readonly",
      },
    },
    rules: {
      "@typescript-eslint/no-explicit-any": "off",
      "react/react-in-jsx-scope": "off",
    },
  },
];
