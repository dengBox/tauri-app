module.exports = {
  root: true,
  env: {
    node: true,
    'vue/setup-compiler-macros': true
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/standard',
    '@vue/typescript/recommended'
  ],
  globals: {},
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    'eol-last': [0],
    semi: [2, 'always'], // 强制语句分号结尾
    // indent: [2, 2], // 强制缩进2 spaces
    // 'no-new': [0], // 不允许new一个实例后不赋值或不比较
    // camelcase: [0, { properties: 'never' }], // 关闭驼峰命名规则
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    '@typescript-eslint/no-non/null/assertion': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-explicit-any': 'off'
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)'
      ],
      env: {
        mocha: true
      }
    }
  ]
};
