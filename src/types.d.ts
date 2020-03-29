interface BreakpointsState {
  [key: string]: boolean
}

interface MediaQueryDict {
  [key: string]: boolean | string | MediaQueryDict
}

interface NormalizedMediaQueryDict {
  [key: string]: boolean | MediaQueryList
}

interface InjectedBreakpointsProps<T = BreakpointsState> {
  breakpoints: DenormalizedBreakpointsState<T>
}

type DeepOverrideValues<T, P, V> = {
  [K in keyof T]?: T[K] extends P ? DeepOverrideValues<T[K]> : V
}

type DenormalizedBreakpointsState<T> = import('utility-types').DeepNonNullable<
  DeepOverrideValues<T, MediaQueryDict, boolean>
>

type Breakpoint<T> = import('utility-types').DeepNonNullable<
  DeepOverrideValues<T, MediaQueryDict, import('react').FunctionComponent>
>

type PlainObject = Record<string | number | symbol>
