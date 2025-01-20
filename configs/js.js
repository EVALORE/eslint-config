import eslint from '@eslint/js';
import { supportedFileTypes } from '../utils/fileTypes.js';
import { jsRules, jsRulesFrozen } from '../rules/js.js';
import globals from 'globals';

/** @type {import('eslint').Linter.Config} */
export const jsConfig = {
  name: 'js config',
  files: [supportedFileTypes.all],
  languageOptions: {
    globals: {
      ...globals.browser,
      ...globals.node,
      ...globals.es2024,
    },
  },
  rules: {
    ...eslint.configs.recommended.rules,
    ...jsRules,
    ...jsRulesFrozen,
  },
  ignores: ['**/node_modules/**', '*.config.*'],
};
