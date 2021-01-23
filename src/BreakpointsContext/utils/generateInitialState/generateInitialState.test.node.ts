import { generateInitialState } from './generateInitialState.util'

describe('generateInitialState', () => {
  it('returns server config if present', () => {
    const TEST_OBJ = {
      mobile: 'only screen and (max-width: 768px)',
      ['desktop.small']: 'only screen and (max-width: 1024px)',
    }

    const OPTIONS = {
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
})
