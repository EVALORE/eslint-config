import tseslint from 'typescript-eslint';
import { jsConfig } from './configs/js.js';
import { tsConfig } from './configs/ts.js';

export default tseslint.config(jsConfig, tsConfig, {
  files: ['eslint.config.js'],
  rules: {
    'no-restricted-exports': 'off',
  },
});
