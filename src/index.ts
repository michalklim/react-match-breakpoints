import { proxifyBreakpointsStore, breakpointsStoreInstance } from 'BreakpointsStore'
import { ComponentType, FunctionComponent } from 'react'

const Breakpoint = (Proxy && proxifyBreakpointsStore(breakpointsStoreInstance)) || breakpointsStoreInstance

export default (Breakpoint as unknown) as Rmb.Breakpoints<Rmb.Config<string>, FunctionComponent>
export { initMatchBreakpoints } from 'initMatchBreakpoints'
export { BreakpointsContext } from 'BreakpointsContext'
export { useBreakpoints } from 'useBreakpoints'
export { withBreakpoints } from 'withBreakpoints'

export interface WithBreakpointsProps<T extends Rmb.Config<string> | Rmb.Config = Rmb.Config> {
  breakpoints: Rmb.Breakpoints<T>
}

export interface TypedBreakpoints<T extends Rmb.Config<string>> {
  default: Rmb.Breakpoints<T, FunctionComponent>
  initMatchBreakpoints: (mediaQueriesDict: T) => ReturnType<typeof import('initMatchBreakpoints').initMatchBreakpoints>
  BreakpointsContext: typeof import('BreakpointsContext').BreakpointsContext
  useBreakpoints: () => Rmb.Breakpoints<T>
  withBreakpoints: <P extends Rmb.InjectedBreakpointsProps<T>>(
    Component: ComponentType<P>,
  ) => ReturnType<typeof import('withBreakpoints').withBreakpoints>
}
