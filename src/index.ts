import { proxifyBreakpointsStore, breakpointsStoreInstance } from 'BreakpointsStore'
import { ComponentType, FunctionComponent } from 'react'

const Breakpoint = (Proxy && proxifyBreakpointsStore(breakpointsStoreInstance)) || breakpointsStoreInstance

export default (Breakpoint as unknown) as Rmb.Breakpoints<Rmb.Config, FunctionComponent>
export { initMatchBreakpoints } from 'initMatchBreakpoints'
export { BreakpointsContext } from 'BreakpointsContext'
export { useBreakpoints } from 'useBreakpoints'
export { withBreakpoints } from 'withBreakpoints'

export type InjectedBreakpointsProps<T extends Rmb.Config = Rmb.Config> = Rmb.InjectedBreakpointsProps<T>

export interface TypedBreakpoints<T extends Rmb.Config> {
  default: Rmb.Breakpoints<T, FunctionComponent>
  initMatchBreakpoints: (breakpointsConfig: T) => ReturnType<typeof import('initMatchBreakpoints').initMatchBreakpoints>
  BreakpointsContext: typeof import('BreakpointsContext').BreakpointsContext
  useBreakpoints: () => Rmb.Breakpoints<T>
  withBreakpoints: <P extends Rmb.InjectedBreakpointsProps<T>>(
    Component: ComponentType<P>,
  ) => ReturnType<typeof import('withBreakpoints').withBreakpoints>
}
