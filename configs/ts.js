import { tsRules } from '../rules/ts.js';
import { supportedFileTypes } from '../utils/fileTypes.js';
import tseslint from 'typescript-eslint';

/** @type {import('typescript-eslint').ConfigWithExtends} */
export const tsConfig = {
  name: 'ts config',
  files: [supportedFileTypes.ts],
  extends: [tseslint.configs.strictTypeChecked, tseslint.configs.stylisticTypeChecked],

  languageOptions: {
    parser: tseslint.parser,
    parserOptions: {
      projectService: true,
      tsconfigRootDir: import.meta.dirname,
    },
  },

  plugins: {
    '@typescript-eslint': tseslint.plugin,
  },

  rules: {
    ...tsRules,
  },
};
