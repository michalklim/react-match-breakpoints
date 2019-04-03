import Provider from './Provider'
import withBreakpoints from './withBreakpoints'
import { breakpointsStoreInstance, proxiedBreakpointsStoreInstance } from './Breakpoints'
import createBreakpoints from './createBreakpoints'
import Context from './Context'

const Breakpoints = (global.Proxy && proxiedBreakpointsStoreInstance) || breakpointsStoreInstance
// const Breakpoints = breakpointsStoreInstance

export { Provider, withBreakpoints, Breakpoints, createBreakpoints, Context }
