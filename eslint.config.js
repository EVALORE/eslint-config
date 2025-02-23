// @ts-check

import tseslint from 'typescript-eslint';
import { jsConfig } from './configs/js.js';
import { tsConfig } from './configs/ts.js';

export default tseslint.config(jsConfig, tsConfig);
