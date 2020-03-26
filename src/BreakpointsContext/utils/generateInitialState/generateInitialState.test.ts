import { generateInitialState } from './generateInitialState.util'

const MATCH_MEDIA_MOCK = {
  addListener: jest.fn(),
  removeListener: jest.fn,
  matches: false,
  media: 'only screen and (max-width: 480px)',
  onchange: jest.fn(),
  addEventListener: jest.fn(),
  removeEventListener: jest.fn(),
  dispatchEvent: jest.fn(),
}

describe('generateInitialState', () => {
  it('correctly parses normalizedMediaQueryDict to breakpoints state', () => {
    const TEST_OBJ = {
      mobile: true,
      ['desktop.small']: MATCH_MEDIA_MOCK,
    }

    const EXPECTED_RESULT = {
      mobile: true,
      ['desktop.small']: false,
    }

    const result = generateInitialState(TEST_OBJ)

    expect(result).toMatchObject(EXPECTED_RESULT)
  })
})
