import { defineConfig } from 'oxlint';
import native from 'oxlint-config-universe/native';

export default defineConfig({
  extends: [native],
  plugins: ['jest'],
  jsPlugins: [],
  rules: {
    // --- ESLint rules ---
    'eslint/no-unused-vars': 'error',
    'eslint/curly': 'warn',

    // --- Import rules ---
    'import/no-duplicates': ['error', { preferInline: true }],

    // --- TypeScript rules ---
    'typescript/consistent-type-imports': [
      'error',
      { prefer: 'type-imports', fixStyle: 'inline-type-imports' },
    ],
    'typescript/no-explicit-any': 'warn',

    // --- React rules ---
    'react/exhaustive-deps': 'error',
    'react/rules-of-hooks': 'error',
    'react/jsx-key': 'error',
    'react/no-array-index-key': 'warn',
    'react/jsx-curly-brace-presence': 'warn',

    // --- Jest rules ---
    'jest/no-disabled-tests': 'warn',
    'jest/no-focused-tests': 'error',
    'jest/no-identical-title': 'error',
    'jest/valid-expect': 'error',

    // --- Testing Library rules for `eslint-plugin-testing-library` ---
    'testing-library/await-async-events': 'warn',
    'testing-library/await-async-utils': 'warn',
    'testing-library/consistent-data-testid': 'warn',
    'testing-library/no-await-sync-events': 'warn',
    'testing-library/prefer-screen-queries': 'warn',
  },
  ignorePatterns: [
    'android/**',
    'ios/**',
    '.expo/**',
    'coverage/**',
    'node_modules/**',
    'dist/**',
    'example/**',
  ],
});
