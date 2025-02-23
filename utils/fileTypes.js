const jsExt = 'js';
const tsExt = 'ts';
const allExt = [jsExt, tsExt].join(',');

export const supportedFileTypes = {
  all: `**/*.{${allExt},}`,
  js: `**/*.{${jsExt},}`,
  ts: `**/*.{${tsExt},}`,
};
