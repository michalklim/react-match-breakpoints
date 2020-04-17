import { isFunction } from './isFunction.common'

const TEST_CASES = [
  {
    key: 'plain object',
    value: {},
    expectedResult: false,
  },
  {
    key: 'boolean',
    value: true,
    expectedResult: false,
  },
  {
    key: 'function',
    value: () => null,
    expectedResult: true,
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

describe.each(TEST_CASES)('isFunction', testCase => {
  it(`returns ${testCase.expectedResult} if value is ${testCase.key}`, () => {
    const result = isFunction(testCase.value)

    expect(result).toEqual(testCase.expectedResult)
  })
})
