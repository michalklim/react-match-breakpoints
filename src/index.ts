import { FunctionComponent } from 'react'
import { initBreakpointSymbol } from './Breakpoint'
import { proxifySymbol } from './Breakpoint/Breakpoint'

export { Breakpoint } from './Breakpoint'
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
  log?: boolean
  isServer?: boolean
  ssr?: {
    config: OverrideDefaultConfig<boolean>
    rehydrate?: boolean
  }
}

export interface ParsedOptions {
  breakpointCSSClass: boolean
  log: boolean
  isServer: boolean
  ssr: {
    config: NormalizedConfig | null
    rehydrate: boolean
  }
}

export type BreakpointComponent = OverrideDefaultConfig<FunctionComponent> & {
  [initBreakpointSymbol]: (normalizedConfig: NormalizedConfig, options: ParsedOptions) => void
  [proxifySymbol]: (options: ParsedOptions) => void
}

export interface InjectedBreakpointsProps {
  breakpoints: OverrideDefaultConfig<boolean>
}

export type OverrideDefaultConfig<ValueType> = import('utility-types').DeepNonNullable<
  DeepOverrideValues<Config, Record<string, any>, ValueType>
>

type DeepOverrideValues<OverrideObject, NestedObject, OvverrideValue> = {
  [Key in keyof OverrideObject]?: OverrideObject[Key] extends NestedObject
    ? DeepOverrideValues<OverrideObject[Key], NestedObject, OvverrideValue>
    : OvverrideValue
}
