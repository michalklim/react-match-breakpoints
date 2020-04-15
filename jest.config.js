const baseConfig = {
  moduleNameMapper: {
    '^common[/](.*)': '<rootDir>/src/common/$1',
    '^BreakpointsContext[/](.*)': '<rootDir>/src/BreakpointsContext/$1',
    '^BreakpointsStore[/](.*)': '<rootDir>/src/BreakpointsStore/$1',
    '^initMatchBreakpoints[/](.*)': '<rootDir>/src/initMatchBreakpoints/$1',
    '^useBreakpoints[/](.*)': '<rootDir>/src/useBreakpoints/$1',
    '^withBreakpoints[/](.*)': '<rootDir>/src/withBreakpoints/$1',
  },
  coveragePathIgnorePatterns: ['<rootDir>/src/index.ts', '<rootDir>/src/utils/index.ts'],
  collectCoverageFrom: ['src/**/*.{ts,tsx}'],
  coverageDirectory: 'coverage',
}

module.exports = {
  projects: [
    {
      ...baseConfig,
      displayName: 'dom',
      testEnvironment: 'jsdom',
      testRegex: '((\\.|/)test)\\.tsx?$',
    },
    {
      ...baseConfig,
      displayName: 'node',
      testEnvironment: 'node',
      testRegex: '((\\.|/)test.node)\\.tsx?$',
    },
  ],
}
