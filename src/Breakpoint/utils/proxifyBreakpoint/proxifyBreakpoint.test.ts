import { ParsedOptions } from '../../..'
import { initBreakpointSymbol, proxifySymbol } from '../../Breakpoint'
import { proxifyBreakpoint } from './proxifyBreakpoint'

let consoleSpy: jest.SpyInstance

const defaultOptions: ParsedOptions = {
  log: true,
  breakpointCSSClass: false,
  isServer: false,
  ssr: {
    config: null,
    rehydrate: false,
  },
}

beforeEach(() => {
  consoleSpy = jest.spyOn(global.console, 'warn')
  consoleSpy.mockImplementation(() => null)
})

afterEach(() => {
  consoleSpy.mockRestore()
})

describe('proxifyBreakpointsStore', () => {
  const TEST_OBJ = {
    mobile: () => null,
    [initBreakpointSymbol]: () => null,
    [proxifySymbol]: () => null,
  }

  it('warns if trying to access missing property', () => {
    const proxiedObject = proxifyBreakpoint(TEST_OBJ, defaultOptions)
    // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
    const _ = (proxiedObject as any).tablet

    expect(consoleSpy).toHaveBeenCalled()
  })

  it('warns only if logging is enabled', () => {
    const proxiedObject = proxifyBreakpoint(TEST_OBJ, { ...defaultOptions, log: false })

    // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
    const _ = (proxiedObject as any).tablet

    expect(consoleSpy).not.toHaveBeenCalled()
  })

  it('returns property value if it exists', () => {
    const proxiedObject = proxifyBreakpoint(TEST_OBJ, defaultOptions)

    const test = proxiedObject.mobile

    expect(consoleSpy).not.toHaveBeenCalled()
    expect(test).toEqual(TEST_OBJ.mobile)
  })
})
