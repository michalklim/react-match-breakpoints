import { get } from './get.util'

describe('get', () => {
  it('gets value from existing path', () => {
    const testObj = {
      key: {
        nestedKey: 'value',
      },
    }

    const result = get(testObj, 'key.nestedKey')

    const EXPECTED_RESULT = 'value'

    expect(result).toEqual(EXPECTED_RESULT)
  })

  it("returns undefined if existing path doesn't exist", () => {
    const testObj = {
      key: {
        nestedKey: 'value',
      },
    }

    const result = get(testObj, 'key.missingKey')

    expect(result).toBeUndefined()
  })

  it("returns default value if existing path doesn't exist and value is set", () => {
    const testObj = {
      key: {
        nestedKey: 'value',
      },
    }

    const DEFAULT_VALUE = 'default value'

    const result = get(testObj, 'key.missingKey', DEFAULT_VALUE)

    expect(result).toEqual(DEFAULT_VALUE)
  })
})
