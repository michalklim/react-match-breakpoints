import { proxiedBreakpointsStoreInstance, breakpointsStoreInstance } from './BreakpointsStore'

const Breakpoint = (window.Proxy && proxiedBreakpointsStoreInstance) || breakpointsStoreInstance

export default Breakpoint
export { Context } from './Context'
export { useBreakpoints } from './useBreakpoints'
