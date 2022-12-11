/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  testTimeout: 30000,
  setupFilesAfterEnv: ['<rootDir>/jest/customMatchers.js'],
  testPathIgnorePatterns: process.env.TEST_BROWSER
    ? [
        '/customConfig.test.js$',
        '/node_modules/',
        '/integrations/',
        '/standalone-cli/',
        '\\.test\\.skip\\.js$',
      ]
    : ['/node_modules/', '/integrations/', '/standalone-cli/', '\\.test\\.skip\\.js$'],
  transform: {
    '\\.js$': '@swc/jest',
  },
}
