module.exports = {
  extends: [
    'stylelint-config-recommended-scss',
    'stylelint-config-idiomatic-order',
    'stylelint-config-recommended-vue/scss',
  ],
  plugins: ['stylelint-order'],
  rules: {
    'color-hex-length': 'long',
    'no-empty-source': null,
    'comment-empty-line-before': 'always',
    'rule-empty-line-before': ['always', {
      except: ['after-single-line-comment'],
      ignore: ['after-comment', 'first-nested'],
    }],
    'at-rule-empty-line-before': ['always',{
      except: ['first-nested'],
      ignore: ['after-comment']
    }],
  },
  overrides: [
    {
      files: ['*.scss', '**/*.scss'],
      customSyntax: "postcss-scss"
    },
    {
      files: ['*.vue', '**/*.vue'],
      customSyntax: "postcss-html"
    }
  ]
}
