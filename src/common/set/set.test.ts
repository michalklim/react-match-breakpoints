import { set } from './set.util'

describe('set', () => {
  it('correctly mutates object by adding new path and setting value for it', () => {
    const testObj = {
      key: {
        nestedKey: 'value',
      },
    }

    set(testObj, 'newKey.newNestedKey', 'newValue')

    const EXPECTED_RESULT = {
      key: {
        nestedKey: 'value',
      },
      newKey: {
        newNestedKey: 'newValue',
      },
    }

    expect(testObj).toMatchObject(EXPECTED_RESULT)
  })

  it('correctly mutates object by updating value in existing path', () => {
    const testObj = {
      key: {
        nestedKey: 'value',
      },
    }

    const EXPECTED_RESULT = {
      key: {
        nestedKey: 'newValue',
      },
    }

    set(testObj, 'key.nestedKey', 'newValue')

    expect(testObj).toMatchObject(EXPECTED_RESULT)
  })
})
