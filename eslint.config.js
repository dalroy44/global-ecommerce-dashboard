import prettierConfig from "eslint-config-prettier";
import pluginImport from "eslint-plugin-import";
import pluginJsxA11y from "eslint-plugin-jsx-a11y";
import pluginReact from "eslint-plugin-react";
import pluginReactHooks from "eslint-plugin-react-hooks";
import storybookPlugin from "eslint-plugin-storybook";
import globals from "globals";
import tseslint from "typescript-eslint";

export default [
  {
    ignores: ["dist", "coverage"],
  },
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    plugins: {
      react: pluginReact,
      "react-hooks": pluginReactHooks,
      import: pluginImport,
      "jsx-a11y": pluginJsxA11y,
      storybook: storybookPlugin,
    },
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parser: tseslint.parser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    rules: {
      ...prettierConfig.rules,
      ...pluginReactHooks.configs.recommended.rules,
      // "import/order": [
      //   "error",
      //   {
      //     groups: [
      //       "builtin",
      //       "external",
      //       "internal",
      //       "parent",
      //       "sibling",
      //       "index",
      //       "object",
      //       "type",
      //     ],
      //     pathGroups: [
      //       {
      //         pattern: "react",
      //         group: "builtin",
      //         position: "before",
      //       },
      //       {
      //         pattern: "@/**",
      //         group: "internal",
      //       },
      //     ],
      //     pathGroupsExcludedImportTypes: ["react"],
      //     "newlines-between": "always",
      //     alphabetize: {
      //       order: "asc",
      //       caseInsensitive: true,
      //     },
      //   },
      // ],
    },
    settings: {
      "import/resolver": {
        typescript: {},
      },
    },
  },
  ...tseslint.configs.recommended,
  ...storybookPlugin.configs["flat/recommended"],
];
