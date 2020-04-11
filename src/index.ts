import { proxifyBreakpointsStore, breakpointsStoreInstance } from './BreakpointsStore'
// import { withBreakpoints } from './withBreakpoints'
// import { BreakpointsContext } from './BreakpointsContext'
// import { initMatchBreakpoints } from './initMatchBreakpoints'

const Breakpoint = (Proxy && proxifyBreakpointsStore(breakpointsStoreInstance)) || breakpointsStoreInstance

export default Breakpoint
export { initMatchBreakpoints } from './initMatchBreakpoints'
export { BreakpointsContext } from './BreakpointsContext'
export { useBreakpoints } from './useBreakpoints'
export { withBreakpoints } from './withBreakpoints'

// export interface WithBreakpointsProps<T extends RmbConfig<string> | RmbConfig<boolean>> {
//   breakpoints: DenormalizedBreakpointsState<T>
// }

// export interface TypedBreakpoints<T extends MediaQueryDict> {
//   default: Breakpoint<T>
//   initMatchBreakpoints: (mediaQueriesDict: T) => ReturnType<typeof initMatchBreakpoints>
//   BreakpointsContext: typeof BreakpointsContext
//   useBreakpoints: () => DenormalizedBreakpointsState<T>
//   withBreakpoints: <P extends InjectedBreakpointsProps<DenormalizedBreakpointsState<T>>>(
//     Component: ComponentType<P>,
//   ) => ReturnType<typeof withBreakpoints>
// }
