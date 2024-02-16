module.exports = {
  extends: [
    'stylelint-config-recommended-scss',
    'stylelint-config-idiomatic-order',
    'stylelint-config-recommended-vue/scss'
  ],
  plugins: [
    'stylelint-order',
  ],
  rules: {
    'color-hex-length': 'long',
    'no-empty-source': null,
    'comment-empty-line-before': 'always',
  },
  overrides: [
    {
      files: ["*.scss", "**/*.scss"],
      customSyntax: "postcss-scss"
    },
    {
      files: ['*.vue', '**/*.vue'],
      customSyntax: "postcss-html"
    }
  ]
}
