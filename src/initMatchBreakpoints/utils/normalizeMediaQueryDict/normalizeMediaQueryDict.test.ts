import { normalizeBreakpointsConfig } from './normalizeMediaQueryDict.util'

const MATCH_MEDIA_QUERY = 'only screen and (max-width: 480px)'
const MATCH_MEDIA_MOCK = {
  addListener: jest.fn(),
  removeListener: jest.fn,
  matches: false,
  media: MATCH_MEDIA_QUERY,
}

beforeAll(() => {
  Object.defineProperty(window, 'matchMedia', {
    value: () => MATCH_MEDIA_MOCK,
    writable: true,
  })
})

afterAll(() => {
  jest.clearAllMocks()
})

describe('normalizeMediaQueryDict', () => {
  it('correctly normalizes flat media query dictionary', () => {
    const TEST_OBJ = {
      mobile: true,
      tablet: MATCH_MEDIA_QUERY,
    }

    const EXPECTED_RESULT = {
      mobile: true,
      tablet: MATCH_MEDIA_MOCK,
    }

    const result = normalizeBreakpointsConfig(TEST_OBJ)

    expect(result).toMatchObject(EXPECTED_RESULT)
  })

  it('correctly normalizes nested media query dictionary', () => {
    const TEST_OBJ = {
      common: {
        mobile: true,
      },
      special: {
        apple: {
          iphone: MATCH_MEDIA_QUERY,
        },
      },
    }

    const EXPECTED_RESULT = {
      ['common.mobile']: true,
      ['special.apple.iphone']: MATCH_MEDIA_MOCK,
    }

    const result = normalizeBreakpointsConfig(TEST_OBJ)

    expect(result).toMatchObject(EXPECTED_RESULT)
  })
})
