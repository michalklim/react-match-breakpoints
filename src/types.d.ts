namespace Rmb {
  type PlainObject = Record<string | number | symbol, any>

  interface Config<T extends boolean | string = boolean> {
    [key: string]: T | Config<T>
  }

  type NormalizedConfig<T extends boolean | string = boolean> = Record<string, T>

  interface Options {
    debug?: boolean
    ssr?: {
      isServer: boolean
      config: Config
      rehydrate?: boolean
    }
  }

  interface ParsedOptions {
    debug?: boolean
    ssr?: {
      isServer: boolean
      config: NormalizedConfig
      rehydrate?: boolean
    }
  }

  type DeepOverrideValues<T, P, V> = {
    [K in keyof T]?: T[K] extends P ? DeepOverrideValues<T[K], P, V> : V
  }

  type Breakpoints<T = Config<string>, P = boolean> = import('utility-types').DeepNonNullable<
    DeepOverrideValues<T, Config<string>, P>
  >

  interface InjectedBreakpointsProps<T extends Config<string> = Config<string>> {
    breakpoints: Breakpoints<T>
  }
}
