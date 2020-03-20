module.exports = {
  testRegex: '((\\.|/)test)\\.tsx?$',
  coveragePathIgnorePatterns: ['<rootDir>/src/index.ts', '<rootDir>/src/utils/index.ts'],
  setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
}
