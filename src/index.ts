import { FunctionComponent } from 'react'
import { proxifyBreakpoint, Breakpoint as ImportedBreakpoint, initBreakpointSymbol } from './Breakpoint'

export const Breakpoint = (Proxy && proxifyBreakpoint(ImportedBreakpoint)) || ImportedBreakpoint
export { initBreakpoints } from './initBreakpoints'
export { BreakpointsContext } from './BreakpointsContext'
export { useBreakpoints } from './useBreakpoints'
export { withBreakpoints } from './withBreakpoints'

export interface Config {
  [key: string]: Config | unknown
}

export type PlainObject = Record<string | number | symbol, any>

export type NormalizedConfig = Record<string, unknown>

export interface Options {
  breakpointCSSClass?: boolean
  ssr?: {
    config: OverrideDefaultConfig<boolean>
    rehydrate?: boolean
  }
}

export interface ParsedOptions {
  breakpointCSSClass?: boolean
  ssr?: {
    config: NormalizedConfig
    rehydrate: boolean
  }
}

export type BreakpointComponent = OverrideDefaultConfig<FunctionComponent> & {
  [initBreakpointSymbol]: (normalizedConfig: NormalizedConfig, options?: ParsedOptions) => void
}

export interface InjectedBreakpointsProps {
  breakpoints: OverrideDefaultConfig<boolean>
}

export type OverrideDefaultConfig<ValueType> = import('utility-types').DeepNonNullable<
  DeepOverrideValues<Config, ValueType>
>

type DeepOverrideValues<T, V> = {
  [K in keyof T]?: T[K] extends T ? DeepOverrideValues<T[K], V> : V
}
