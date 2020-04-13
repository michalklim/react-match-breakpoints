import { proxifyBreakpointsStore } from './proxifyBreakpointsStore.util'

let consoleSpy: jest.SpyInstance

beforeEach(() => {
  consoleSpy = jest.spyOn(global.console, 'warn')
  consoleSpy.mockImplementation(() => null)
})

afterEach(() => {
  consoleSpy.mockRestore()
})

describe('proxifyBreakpointsStore', () => {
  it('warn if trying to access missing property', () => {
    const TEST_OBJ = {
      mobile: true,
    }

    const proxiedObject = proxifyBreakpointsStore(TEST_OBJ)
    // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
    const _ = (proxiedObject as any).tablet

    expect(consoleSpy).toHaveBeenCalled()
  })

  it('just return property value if it exists', () => {
    const TEST_OBJ = {
      mobile: true,
    }

    const proxiedObject = proxifyBreakpointsStore(TEST_OBJ)

    const test = proxiedObject.mobile

    expect(consoleSpy).not.toHaveBeenCalled()
    expect(test).toEqual(true)
  })
})
