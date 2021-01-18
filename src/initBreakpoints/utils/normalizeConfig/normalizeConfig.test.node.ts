import { normalizeConfig } from './normalizeConfig.util'

describe('normalizeMediaQueryDict', () => {
  it('correctly normalizes flat config', () => {
    const TEST_OBJ = {
      mobile: true,
      tablet: false,
    }

    const result = normalizeConfig(TEST_OBJ)

    expect(result).toMatchObject(TEST_OBJ)
  })

  it('correctly normalizes nested config', () => {
    const TEST_OBJ = {
      common: {
        mobile: true,
      },
      special: {
        apple: {
          iphone: false,
        },
      },
    }

    const EXPECTED_RESULT = {
      ['common.mobile']: true,
      ['special.apple.iphone']: false,
    }

    const result = normalizeConfig(TEST_OBJ)

    expect(result).toMatchObject(EXPECTED_RESULT)
  })
})
