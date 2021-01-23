import { generateInitialState } from './generateInitialState.util'

let windowSpy: jest.SpyInstance

beforeEach(() => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
  // @ts-ignore
  windowSpy = jest.spyOn(global, 'window', 'get')
})

afterEach(() => {
  windowSpy.mockRestore()
})

describe('generateInitialState', () => {
  it('returns server config if present', () => {
    const TEST_OBJ = {
      mobile: 'only screen and (max-width: 768px)',
      ['desktop.small']: 'only screen and (max-width: 1024px)',
    }

    const OPTIONS = {
      log: false,
      breakpointCSSClass: false,
      isServer: false,
      ssr: {
        rehydrate: true,
        config: {
          mobile: true,
          ['desktop.small']: false,
        },
      },
    }

    const result = generateInitialState(TEST_OBJ, OPTIONS)

    expect(result).toMatchObject(OPTIONS.ssr.config)
  })

  it('return matchMedia enhanced config if rendered just on client', () => {
    windowSpy.mockImplementation(() => ({
      matchMedia: (val: string) => ({
        addListener: jest.fn(),
        removeListener: jest.fn,
        matches: false,
        media: val,
        onchange: jest.fn(),
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      }),
    }))

    const TEST_OBJ = {
      mobile: 'only screen and (max-width: 768px)',
      ['desktop.small']: 'only screen and (max-width: 1024px)',
    }

    const OPTIONS = {
      log: false,
      breakpointCSSClass: false,
      isServer: false,
      ssr: {
        config: null,
        rehydrate: false,
      },
    }

    const EXPECTED_RESULT = {
      mobile: false,
      ['desktop.small']: false,
    }

    const result = generateInitialState(TEST_OBJ, OPTIONS)

    expect(result).toMatchObject(EXPECTED_RESULT)
  })
})
