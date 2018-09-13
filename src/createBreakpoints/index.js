import { breakpointsStoreInstance } from '../Breakpoints'

const createBreakpoints = (queries, componentRenameFn) => {
  breakpointsStoreInstance.buildBreakpointsComponents(queries, componentRenameFn)

  return {
    queries,
    componentRenameFn,
  }
}

export default createBreakpoints
