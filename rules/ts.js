/** @type {import('eslint').Linter.RulesRecord} */
export const tsRules = {
  '@typescript-eslint/explicit-module-boundary-types': 'error',
  '@typescript-eslint/method-signature-style': 'error',
  '@typescript-eslint/no-use-before-define': 'error',
  '@typescript-eslint/explicit-member-accessibility': [
    'error',
    {
      overrides: {
        constructors: 'no-public',
      },
    },
  ],
  '@typescript-eslint/unbound-method': ['error', { ignoreStatic: true }],
  '@typescript-eslint/member-ordering': ['error', { default: ['field', 'constructor', 'method'] }],
  '@typescript-eslint/no-shadow': 'error',
};
