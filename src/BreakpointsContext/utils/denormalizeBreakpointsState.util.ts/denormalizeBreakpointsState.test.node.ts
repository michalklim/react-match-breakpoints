import { denormalizeBreakpointsState } from './denormalizeBreakpointsState.util'

describe('denormalizeBreakpointsState', () => {
  it('correctly denormalizes flat breakpoints state', () => {
    const TEST_OBJ = {
      ['mobile']: true,
      ['desktop']: false,
    }

    const EXPECTED_RESULT = {
      mobile: true,
      desktop: false,
    }

    const result = denormalizeBreakpointsState(TEST_OBJ)

    expect(result).toMatchObject(EXPECTED_RESULT)
  })

  it('correctly denormalizes nested breakpoints state', () => {
    const TEST_OBJ = {
      ['common.mobile']: true,
      ['special.apple.iphone']: false,
    }

    const EXPECTED_RESULT = {
      common: {
        mobile: true,
      },
      special: {
        apple: {
          iphone: false,
        },
      },
    }

    const result = denormalizeBreakpointsState(TEST_OBJ)

    expect(result).toMatchObject(EXPECTED_RESULT)
  })
})
