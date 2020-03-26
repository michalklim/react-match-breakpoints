import { proxifyBreakpointsStore } from './proxifyBreakpointsStore.util'

afterEach(() => {
  jest.clearAllMocks()
})

describe('proxifyBreakpointsStore', () => {
  it('warn if trying to access missing property', () => {
    const spy = jest.spyOn(global.console, 'warn').mockImplementation()

    const TEST_OBJ = {
      mobile: true,
    }

    const proxiedObject = proxifyBreakpointsStore(TEST_OBJ)
    // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
    const _ = (proxiedObject as any).tablet

    expect(spy).toHaveBeenCalled()
  })

  it('just return property value if it exists', () => {
    const spy = jest.spyOn(global.console, 'warn')

    const TEST_OBJ = {
      mobile: true,
    }

    const proxiedObject = proxifyBreakpointsStore(TEST_OBJ)

    const test = proxiedObject.mobile

    expect(spy).not.toHaveBeenCalled()
    expect(test).toEqual(true)
  })
})
