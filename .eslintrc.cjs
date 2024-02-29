require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,
  extends: [
    'airbnb-base',
    'airbnb-typescript/base',
    'plugin:@typescript-eslint/recommended-type-checked',
    'plugin:vue/vue3-recommended',
    'plugin:nuxt/recommended',
    '@nuxt/eslint-config',
  ],
  plugins: ['nuxt'],
  overrides: [
    {
      extends: ['plugin:@typescript-eslint/disable-type-checked'],
      files: ['./**/*.js', '.eslintrc.{js,cjs}', '.stylelintrc.{js,cjs}'],
    },
    {
      files: ['./src/pages/**.vue'],
      rules: { 'vue/multi-word-component-names': 'off' },
    },
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    parser: '@typescript-eslint/parser',
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
    extraFileExtensions: ['.vue'],
  },
  rules: {
    // JS
    'quote-props': ['error', 'consistent-as-needed'],
    'arrow-parens': ['error', 'as-needed'],
    'no-multiple-empty-lines': ['error', { max: 1 }],
    'curly': [2, 'multi'],
    'import/no-extraneous-dependencies': ['warn', {
      devDependencies: true,
      optionalDependencies: true,
      peerDependencies: true,
    }],
    'import/prefer-default-export': 'off',
    'import/no-unresolved': [2, { ignore: ['\\.img$', '\\.svg', '\\.png', '\\.json'] }],
    // TS
    '@typescript-eslint/comma-dangle': 'off',
    '@typescript-eslint/semi': 'off',
    // Vue
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
    // Style
    'max-len': ['error', {
      code: 120,
      ignoreComments: true,
      ignoreUrls: true,
    }],
    'indent': ['error', 2],
    'linebreak-style': 'off',
    'quotes': ['error', 'single'],
    'semi': ['error', 'always'],
    'comma-dangle': ['error', 'always-multiline'],
  },
};
