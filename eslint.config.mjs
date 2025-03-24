import {FlatCompat} from '@eslint/eslintrc';
import pluginJs from '@eslint/js';
import globals from 'globals';
import path from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: pluginJs.configs.recommended,
  allConfig: pluginJs.configs.all,
});

export default [
  {
    files: ['**/*.{js,mjs,cjs,jsx}'],
    languageOptions: {
      globals: globals.browser,
    },
    rules: {
      'no-unused-vars': ['error', {argsIgnorePattern: '^_'}],
      'import/newline-after-import': ['error', {count: 1}],
      'import/order': [
        'error',
        {
          'newlines-between': 'always',
          groups: ['type'],
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
        },
      ],
      'prefer-const': 'error',
      'ft-flow/no-types-missing-file-annotation': [
        'error',
        {
          onlyFilesWithFlowAnnotation: true,
        },
      ],
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },

  {
    ignores: ['dist/**/*.js'],
  },

  pluginJs.configs.recommended,

  ...compat.plugins('ft-flow', 'eslint-plugin-import'),
  ...compat.extends('eslint:recommended', 'plugin:ft-flow/recommended'),
];
