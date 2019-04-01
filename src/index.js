import Provider from './Provider'
import withBreakpoints from './withBreakpoints'
import { proxiedBreakpointsStoreInstance, breakpointsStoreInstance } from './Breakpoints'
import createBreakpoints from './createBreakpoints'
import Context from './Context'

const Breakpoints = (global.Proxy && proxiedBreakpointsStoreInstance) || breakpointsStoreInstance

export { Provider, withBreakpoints, Breakpoints, createBreakpoints, Context }
