import { angularTemplateRules } from '../rules/angular-template.js';
import { supportedFileTypes } from '../utils/fileTypes.js';
import * as angular from 'angular-eslint';

/** @type {import('typescript-eslint').ConfigWithExtends} */
export const angularTemplateConfig = {
  name: 'angular-template config',
  files: [supportedFileTypes.angularTemplate],
  extends: [
    /** @see https://github.com/angular-eslint/angular-eslint/blob/main/packages/angular-eslint/src/configs/template-accessibility.ts */
    ...angular.configs.templateAccessibility,
    /** @see https://github.com/angular-eslint/angular-eslint/blob/main/packages/angular-eslint/src/configs/template-recommended.ts */
    ...angular.configs.templateRecommended,
  ],
  rules: angularTemplateRules,
}