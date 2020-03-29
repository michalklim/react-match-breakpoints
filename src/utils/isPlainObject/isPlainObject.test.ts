import { isPlainObject } from './isPlainObject.util'

const TEST_CASES = [
  {
    key: 'plain object',
    value: {
      key: 'value',
    },
    expectedResult: true,
  },
  {
    key: 'empty plain object',
    value: {},
    expectedResult: true,
  },
  {
    key: 'boolean',
    value: true,
    expectedResult: false,
  },
  {
    key: 'function',
    value: () => null,
    expectedResult: false,
  },
  {
    key: 'string',
    value: 'value',
    expectedResult: false,
  },
  {
    key: 'number',
    value: 3,
    expectedResult: false,
  },
  {
    key: 'array',
    value: [1, 2, 3],
    expectedResult: false,
  },
  {
    key: 'undefined',
    value: undefined,
    expectedResult: false,
  },
  {
    key: 'null',
    value: null,
    expectedResult: false,
  },
]

describe.each(TEST_CASES)('isPlainObject', testCase => {
  it(`returns ${testCase.expectedResult} if value is ${testCase.key}`, () => {
    const result = isPlainObject(testCase.value)

    expect(result).toEqual(testCase.expectedResult)
  })
})
