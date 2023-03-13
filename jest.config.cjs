const dayjs = require('dayjs');

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  reporters: [
    'default',
    [
      'jest-html-reporter',
      {
        pageTitle: 'Jest Report',
        outputPath: `./report/${dayjs().format('YYYY-MM-DD')}.html`,
        includeFailureMsg: true
      }
    ]
  ]
};
