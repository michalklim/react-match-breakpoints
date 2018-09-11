import { breakpointsStoreInstance } from '../Breakpoints'

const createBreakpointsComponents = (breakpoints, componentRenameFn) => {
  breakpointsStoreInstance.buildBreakpointsComponents(breakpoints, componentRenameFn)
}

export default createBreakpointsComponents
