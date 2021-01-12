import { ComponentType, FunctionComponent } from 'react'
import { proxifyBreakpointsStore, breakpointsStoreInstance } from './BreakpointsStore'
import { Breakpoints, Config, InjectedBreakpointsProps as ImportedInjectedBreakpointsProps } from './types'

const Breakpoint = (Proxy && proxifyBreakpointsStore(breakpointsStoreInstance)) || breakpointsStoreInstance

export default (Breakpoint as unknown) as Breakpoints<Config, FunctionComponent>
export { initMatchBreakpoints } from './initMatchBreakpoints'
export { BreakpointsContext } from './BreakpointsContext'
export { useBreakpoints } from './useBreakpoints'
export { withBreakpoints } from './withBreakpoints'

export type InjectedBreakpointsProps<T extends Config = Config> = ImportedInjectedBreakpointsProps<T>

export interface TypedBreakpoints<T extends Config> {
  default: Breakpoints<T, FunctionComponent>
  initMatchBreakpoints: (
    breakpointsConfig: T,
  ) => ReturnType<typeof import('./initMatchBreakpoints').initMatchBreakpoints>
  BreakpointsContext: typeof import('./BreakpointsContext').BreakpointsContext
  useBreakpoints: () => Breakpoints<T>
  withBreakpoints: <P extends InjectedBreakpointsProps<T>>(
    Component: ComponentType<P>,
  ) => ReturnType<typeof import('./withBreakpoints').withBreakpoints>
}
