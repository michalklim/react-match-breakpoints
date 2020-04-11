type PlainObject = Record<string | number | symbol, any>

interface RmbBreakpointsState {
  [key: string]: boolean
}

interface RmbConfig<T extends boolean | string> {
  [key: string]: T | BreakpointsConfig
}

interface RmbNormalizedBreakpointsConfig<T extends boolean | string> {
  [key: string]: T
}

interface RmbOptions {
  debug?: boolean
  ssr?: {
    isServer: boolean
    config: RmbConfig<boolean>
    rehydrate?: boolean
  }
}

interface RmbParsedOptions {
  debug?: boolean
  ssr?: {
    isServer: boolean
    config: RmbBreakpointsState
    rehydrate?: boolean
  }
}
//
// interface InjectedBreakpointsProps<T = RmbBreakpointsState> {
//   breakpoints: RmbConfig<boolean>
// }
//
// type DeepOverrideValues<T, P, V> = {
//   [K in keyof T]?: T[K] extends P ? DeepOverrideValues<T[K]> : V
// }
//
// type DenormalizedBreakpointsState<T> = import('utility-types').DeepNonNullable<
//   DeepOverrideValues<T, MediaQueryDict, boolean>
//   >
