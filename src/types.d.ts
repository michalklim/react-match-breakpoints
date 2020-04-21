namespace Rmb {
  type PlainObject = Record<string | number | symbol, any>

  interface Config<T extends string | boolean = string> {
    [key: string]: T | Config<T>
  }

  type NormalizedConfig<T extends boolean | string = boolean> = Record<string, T>

  interface Options {
    breakpointCSSClass?: boolean
    ssr?: {
      isServer: boolean
      config: Config<boolean>
      rehydrate?: boolean
    }
  }

  interface ParsedOptions {
    breakpointCSSClass?: boolean
    ssr?: {
      isServer: boolean
      config: NormalizedConfig
      rehydrate?: boolean
    }
  }

  type DeepOverrideValues<T, P, V> = {
    [K in keyof T]?: T[K] extends P ? DeepOverrideValues<T[K], P, V> : V
  }

  type Breakpoints<T = Config, P = boolean> = import('utility-types').DeepNonNullable<DeepOverrideValues<T, Config, P>>

  interface InjectedBreakpointsProps<T extends Config = Config> {
    breakpoints: Breakpoints<T>
  }
}
