module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  plugins: [],
  // Add your custom rules here
  rules: {
    // Enforce 2 space indentation in <script>
    indent: 'off',
    'vue/script-indent': ['error', 2, { baseIndent: 1 }]
  }
}
