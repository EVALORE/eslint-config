const jsExt = 'js';
const tsExt = 'ts';
const angularTemplateExt = 'html';
const allExt = [jsExt, tsExt].join(',');

export const supportedFileTypes = {
  all: `**/*.{${allExt},}`,
  js: `**/*.{${jsExt},}`,
  ts: `**/*.{${tsExt},}`,
  angularTemplate: `**/*.{${angularTemplateExt},}`,
};
