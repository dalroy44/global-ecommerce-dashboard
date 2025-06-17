// .eslintrc.cjs
module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:import/recommended', // Add this
    'plugin:import/typescript', // Add this
    'plugin:prettier/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', 'import'], // Add 'import' here
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    // This is the new rule configuration
    'import/order': [
      'error',
      {
        groups: [
          'builtin', // Built-in imports (e.g., 'react')
          'external', // External packages
          'internal', // Aliased imports
          'parent', // Parent directory imports (../)
          'sibling', // Sibling directory imports (./)
          'index', // Index file imports
          'object', // Imports from 'object' type
          'type', // Type imports
        ],
        pathGroups: [
          {
            pattern: 'react',
            group: 'builtin',
            position: 'before',
          },
          {
            pattern: '@/**',
            group: 'internal',
          },
        ],
        pathGroupsExcludedImportTypes: ['react'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
  },
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
}
