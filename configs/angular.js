import angular from 'angular-eslint';
import { angularRules } from '../rules/angular.js';
import { supportedFileTypes } from '../utils/fileTypes.js';

/** @type {import('typescript-eslint').ConfigWithExtends} */
export const angularConfig = {
  name: 'angular config',
  files: [supportedFileTypes.ts],
  extends: [...angular.configs.tsRecommended],
  processor: angular.processInlineTemplates,
  rules: {
    ...angularRules,
  },
};
