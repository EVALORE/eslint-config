import { jsConfig } from './configs/js.js';
import { tsConfig } from './configs/ts.js';
import { angularConfig } from './configs/angular.js';
import { angularTemplateConfig } from './configs/angular-template.js';

export const configs = {
  js: jsConfig,
  ts: tsConfig,
  angular: angularConfig,
  angularTemplate: angularTemplateConfig,
};

export const rules = {
  js: jsConfig.rules,
  ts: tsConfig.rules,
  angular: angularConfig.rules,
  angularTemplate: angularTemplateConfig.rules,
};
