import { tsRules } from '../rules/ts.js';
import { supportedFileTypes } from '../utils/fileTypes.js';
import tseslint from 'typescript-eslint';
import eslint from '@eslint/js';

export const tsConfig = {
  name: 'ts config',
  files: [supportedFileTypes.ts],
  extends: [
    eslint.configs.recommended,
    tseslint.configs.strictTypeChecked,
    tseslint.configs.stylisticTypeChecked,
  ],

  languageOptions: {
    parserOptions: {
      projectService: true,
      tsconfigRootDir: import.meta.dirname,
    },
  },

  rules: {
    ...tsRules,
  },
};
