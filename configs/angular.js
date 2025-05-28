import angular from 'angular-eslint';
import { angularRules } from '../rules/angular.js';

/** @type {import('typescript-eslint').ConfigWithExtends} */
export const angularConfig = {
  name: 'angular config',
  extends: [...angular.configs.tsRecommended],
  processor: angular.processInlineTemplates,
  rules: {
    ...angularRules,
  },
};
