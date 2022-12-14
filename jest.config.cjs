module.exports = {
  testMatch: ['**/tests/**/*.[jt]s?(x)'],
  reporters: [
    'default',
    ['./node_modules/jest-html-reporter', {
      pageTitle: 'test shsc-ui'
    }]
  ],
  transform: {
    // 将.js后缀的文件使用babel-jest处理
    '^.+\\.js$': 'babel-jest'
    // '^.+\\.(ts|tsx)$': 'ts-jest'
  }
}
