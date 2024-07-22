import globals from 'globals';
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginVue from 'eslint-plugin-vue';
import vueParser from 'vue-eslint-parser';
import stylistic from '@stylistic/eslint-plugin';
import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt(
  { files: ['src/**/*.{js,mjs,cjs,ts,vue}'] },
  { languageOptions: { globals: globals.browser } },
  eslint.configs.recommended,
  ...pluginVue.configs['flat/recommended'],
  ...tseslint.configs.strict,
  ...tseslint.configs.stylistic,
  {
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: tseslint.parser,
        tsconfigRootDir: import.meta.dirname,
        project: ['./tsconfig.json'],
        extraFileExtensions: ['.vue'],
      },
    },
  },
  {
    rules: {
      // JS
      'quote-props': ['error', 'consistent-as-needed'],
      'no-multiple-empty-lines': ['error', { max: 1 }],
      'curly': [2, 'multi'],
      'no-shadow': 'off',
      'no-console': ['warn', { allow: ['error'] }],
      'max-len': ['error', {
        code: 160,
        ignoreComments: true,
        ignoreUrls: true,
      }],
      // Vue
      'vue/no-v-html': 'off',
      'vue/attributes-order': 'error',
      'vue/multiline-html-element-content-newline': ['error'],
      'vue/no-async-in-computed-properties': ['error'],
      'vue/no-multi-spaces': ['error', {
        ignoreProperties: false,
      }],
      'vue/multi-word-component-names': ['error', {
        ignores: ['index', 'default', 'error'],
      }],
      'vue/component-name-in-template-casing': ['error', 'PascalCase', {
        registeredComponentsOnly: true,
        ignores: [],
      }],
      'vue/max-attributes-per-line': ['error', {
        singleline: 3,
        multiline: 1,
      }],
      'vue/html-end-tags': ['error'],
      'vue/html-indent': ['error'],
      'vue/html-quotes': ['error', 'double'],
      'vue/html-self-closing': ['error', {
        html: {
          normal: 'always',
          void: 'never',
        },
        svg: 'always',
        math: 'always',
      }],
      'vue/max-len': 'off',
    },
  },
  {
    plugins: {
      '@stylistic': stylistic,
    },
    rules: {
      '@stylistic/indent': ['error', 2],
      '@stylistic/linebreak-style': 'off',
      '@stylistic/quotes': ['error', 'single'],
      '@stylistic/semi': ['error', 'always'],
      '@stylistic/comma-dangle': ['error', 'always-multiline'],
      '@stylistic/member-delimiter-style': ['error', {
        multiline: {
          delimiter: 'comma',
          requireLast: true,
        },
        singleline: {
          delimiter: 'comma',
          requireLast: false,
        },
      }],
    },
  },
);
