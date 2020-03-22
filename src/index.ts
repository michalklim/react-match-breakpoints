import { proxiedBreakpointsStoreInstance, breakpointsStoreInstance } from './BreakpointsStore'

const Breakpoint = (window.Proxy && proxiedBreakpointsStoreInstance) || breakpointsStoreInstance

export default Breakpoint
export { initMatchBreakpoints } from './initMatchBreakpoints'
export { Context } from './Context'
export { useBreakpoints } from './useBreakpoints'
