/** @type {import('eslint').Linter.RulesRecord} */
export const jsRules = {
  'array-callback-return': 'error',
  'no-await-in-loop': 'error',
  'no-constructor-return': 'error',
  'no-duplicate-imports': 'error',
  'no-inner-declarations': 'error',
  'no-promise-executor-return': 'error',
  'no-self-compare': 'error',
  'no-template-curly-in-string': 'error',
  'no-unmodified-loop-condition': 'error',
  'no-unreachable-loop': 'error',
  'no-use-before-define': 'error',
  'no-useless-assignment': 'error',
  'require-atomic-updates': 'error',

  'accessor-pairs': 'error',
  'block-scoped-var': 'error',
  'class-methods-use-this': 'off',
  complexity: ['error', 5],
  'consistent-return': 'error',
  'default-case': 'error',
  'default-case-last': 'error',
  eqeqeq: ['error', 'always', { null: 'ignore' }],
  'func-names': ['error', 'as-needed'],
  'grouped-accessor-pairs': 'error',
  'guard-for-in': 'error',
  'max-classes-per-file': 'error',
  'max-depth': ['error', { max: 3 }],
  'max-lines': 'error',
  'max-lines-per-function': [
    'error',
    {
      max: 40,
      skipBlankLines: true,
      skipComments: true,
      IIFEs: true,
    },
  ],
  'max-nested-callbacks': ['error', 3],
  'max-params': ['error', 3],
  'max-statements': ['error'],
  'new-cap': 'off',
  'no-alert': 'error',
  'no-array-constructor': 'error',
  'no-bitwise': 'error',
  'no-caller': 'error',
  'no-console': 'warn',
  'no-empty-function': ['error', { allow: ['constructors'] }],
  'no-eq-null': 'error',
  'no-eval': 'error',
  'no-extend-native': 'error',
  'no-extra-bind': 'error',
  'no-implicit-globals': 'error',
  'no-implied-eval': 'error',
  'no-invalid-this': 'error',
  'no-iterator': 'error',
  'no-lone-blocks': 'error',
  'no-loop-func': 'error',
  'no-multi-assign': 'error',
  'no-new': 'error',
  'no-new-func': 'error',
  'no-new-wrappers': 'error',
  'no-object-constructor': 'error',
  'no-octal-escape': 'error',
  'no-proto': 'error',
  'no-unused-private-class-members': 'off',
  'no-restricted-exports': ['error', { restrictDefaultExports: { direct: true } }],

  'no-restricted-globals': [
    'error',
    {
      name: 'isFinite',
      message:
        'Use Number.isFinite instead https://github.com/airbnb/javascript#standard-library--isfinite',
    },
    {
      name: 'isNaN',
      message:
        'Use Number.isNaN instead https://github.com/airbnb/javascript#standard-library--isnan',
    },
  ],
  'no-restricted-properties': [
    'error',
    {
      object: 'arguments',
      property: 'callee',
      message: 'arguments.callee is deprecated',
    },
    {
      object: 'global',
      property: 'isFinite',
      message: 'Please use Number.isFinite instead',
    },
    {
      object: 'self',
      property: 'isFinite',
      message: 'Please use Number.isFinite instead',
    },
    {
      object: 'window',
      property: 'isFinite',
      message: 'Please use Number.isFinite instead',
    },
    {
      object: 'global',
      property: 'isNaN',
      message: 'Please use Number.isNaN instead',
    },
    {
      object: 'self',
      property: 'isNaN',
      message: 'Please use Number.isNaN instead',
    },
    {
      object: 'window',
      property: 'isNaN',
      message: 'Please use Number.isNaN instead',
    },
    {
      property: '__defineGetter__',
      message: 'Please use Object.defineProperty instead.',
    },
    {
      property: '__defineSetter__',
      message: 'Please use Object.defineProperty instead.',
    },
    {
      object: 'Math',
      property: 'pow',
      message: 'Use the exponentiation operator (**) instead.',
    },
  ],
  'no-restricted-syntax': [
    'error',
    {
      selector: 'ForInStatement',
      message:
        'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
    },
    {
      selector: 'ForOfStatement',
      message:
        'iterators/generators require regenerator-runtime, which is too heavyweight for this guide to allow them. Separately, loops should be avoided in favor of array iterations.',
    },
    {
      selector: 'LabeledStatement',
      message:
        'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
    },
    {
      selector: 'WithStatement',
      message:
        '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
    },
  ],

  'no-return-assign': 'error',
  'no-script-url': 'error',
  'no-sequences': 'error',
  'no-shadow': 'error',
  'no-throw-literal': 'error',
  'no-unused-expressions': 'error',
  'no-useless-call': 'error',
  'no-useless-rename': 'error',
  'no-useless-return': 'error',
  'no-var': 'error',
  'prefer-const': 'error',
  'prefer-named-capture-group': 'error',
  'prefer-object-has-own': 'error',
  'prefer-promise-reject-errors': 'error',
  'prefer-regex-literals': ['error', { disallowRedundantWrapping: true }],
  'prefer-rest-params': 'error',
  radix: 'error',
  'require-await': 'error',
  'require-unicode-regexp': 'error',
  strict: 'error',
  'symbol-description': 'error',
};

/** @type {import('eslint').Linter.RulesRecord} */
export const jsRulesFrozen = {
  'arrow-body-style': 'error',
  camelcase: 'error',
  'capitalized-comments': 'off',
  'consistent-this': 'off',
  curly: 'error',
  'default-param-last': 'error',
  'func-name-matching': 'error',
  'func-style': ['error', 'declaration', { allowArrowFunctions: true }],

  'id-match': 'error',
  'id-denylist': 'error',

  'init-declarations': 'off',
  'logical-assignment-operators': 'error',
  'no-continue': 'error',
  'no-div-regex': 'error',
  'no-else-return': 'error',
  'no-extra-boolean-cast': ['error', { enforceForInnerExpressions: true }],
  'no-extra-label': 'error',
  'no-implicit-coercion': ['error', { disallowTemplateShorthand: true }],
  'no-inline-comments': 'error',
  'no-label-var': 'error',
  'no-lonely-if': 'error',
  'no-magic-numbers': [
    'warn',
    { enforceConst: true, ignoreClassFieldInitialValues: true, ignoreArrayIndexes: true },
  ],
  'no-multi-str': 'error',
  'no-negated-condition': 'error',
  'no-nested-ternary': 'error',
  'no-plusplus': 'error',
  'no-ternary': 'off',
  'no-undef-init': 'error',
  'no-undefined': 'error',
  'no-underscore-dangle': 'error',
  'no-unneeded-ternary': ['error', { defaultAssignment: false }],
  'no-useless-computed-key': 'error',
  'no-useless-concat': 'error',
  'no-void': ['error', { allowAsStatement: true }],
  'no-warning-comments': 'error',
  'object-shorthand': 'error',
  'operator-assignment': 'error',
  'prefer-arrow-callback': 'error',
  'prefer-destructuring': 'error',
  'prefer-exponentiation-operator': 'error',
  'prefer-numeric-literals': 'error',
  'prefer-object-spread': 'error',
  'prefer-spread': 'error',
  'prefer-template': 'error',
  yoda: 'error',
};
