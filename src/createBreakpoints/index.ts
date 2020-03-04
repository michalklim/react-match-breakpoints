import { breakpointsStoreInstance } from '../Breakpoints'

const createBreakpoints = (queries, componentRenameFn, serverQueries) => {
  breakpointsStoreInstance.buildBreakpointsComponents(queries, componentRenameFn, serverQueries)

  return {
    queries,
    componentRenameFn,
    serverQueries,
  }
}

export default createBreakpoints
