const jsExt = {
  default: 'js',
  commonjs: 'cjs',
  esm: 'mjs',
};

const tsExt = {
  default: 'ts',
  commonjs: 'cts',
  esm: 'mts',
};

const allExt = [jsExt.default, tsExt.default].join(',');

export const supportedFileTypes = {
  all: `**/*.{${allExt}}`,
  js: `**/*.{${jsExt.default}}`,
  ts: `**/*.{${tsExt.default}}`,
};
