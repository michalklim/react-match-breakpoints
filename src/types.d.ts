namespace Rmb {
  type PlainObject = Record<string | number | symbol, any>

  interface Config {
    [key: string]: string | Config
  }

  type NormalizedConfig<T extends boolean | string = boolean> = Record<string, T>

  interface Options {
    debug?: boolean
    ssr?: {
      isServer: boolean
      config: ServerConfig
      rehydrate?: boolean
    }
  }

  type ServerConfig = DeepOverrideValues<Config, Config, boolean>

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

  type Breakpoints<T = Config, P = boolean> = import('utility-types').DeepNonNullable<DeepOverrideValues<T, Config, P>>

  interface InjectedBreakpointsProps<T extends Config = Config> {
    breakpoints: Breakpoints<T>
  }
}
