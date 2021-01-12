export type PlainObject = Record<string | number | symbol, any>

export interface Config<T extends string | boolean = string> {
  [key: string]: T | Config<T>
}

export type NormalizedConfig<T extends boolean | string = boolean> = Record<string, T>

export interface Options {
  breakpointCSSClass?: boolean
  ssr?: {
    isServer: boolean
    config: Config<boolean>
    rehydrate?: boolean
  }
}

export interface ParsedOptions {
  breakpointCSSClass?: boolean
  ssr?: {
    isServer: boolean
    config: NormalizedConfig
    rehydrate?: boolean
  }
}

export type DeepOverrideValues<T, P, V> = {
  [K in keyof T]?: T[K] extends P ? DeepOverrideValues<T[K], P, V> : V
}

export type Breakpoints<T = Config, P = boolean> = import('utility-types').DeepNonNullable<
  DeepOverrideValues<T, Config, P>
>

export interface InjectedBreakpointsProps<T extends Config = Config> {
  breakpoints: Breakpoints<T>
}
