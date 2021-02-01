import { FunctionComponent } from 'react'
import { initBreakpointSymbol } from './Breakpoint'
import { proxifySymbol } from './Breakpoint/Breakpoint'

export { Breakpoint } from './Breakpoint'
export { initBreakpoints } from './initBreakpoints'
export { BreakpointsContext } from './BreakpointsContext'
export { useBreakpoints } from './useBreakpoints'
export { withBreakpoints } from './withBreakpoints'

export interface UserConfig {} // eslint-disable-line @typescript-eslint/no-empty-interface

export interface ConfigStructure<ValueType extends AllowedConfigValues> {
  [key: string]: ConfigStructure<ValueType> | ValueType
}

export type AllowedConfigValues = string | boolean

export type Config<ValueType extends AllowedConfigValues> = keyof UserConfig extends never
  ? ConfigStructure<ValueType>
  : UserConfig

export type PlainObject = Record<string | number | symbol, any>

export type NormalizedConfig<ValuesType extends AllowedConfigValues> = Record<string, ValuesType>

export interface Options {
  breakpointCSSClass?: boolean
  log?: boolean
  isServer?: boolean
  ssr?: {
    config: OverrideUserConfig<boolean>
    rehydrate?: boolean
  }
}

export interface ParsedOptions {
  breakpointCSSClass: boolean
  log: boolean
  isServer: boolean
  ssr: {
    config: NormalizedConfig<boolean> | null
    rehydrate: boolean
  }
}

export type BreakpointComponent = OverrideUserConfig<FunctionComponent> & {
  [initBreakpointSymbol]: (normalizedConfig: NormalizedConfig<string>, options: ParsedOptions) => void
  [proxifySymbol]: (options: ParsedOptions) => void
}

export interface InjectedBreakpointsProps {
  breakpoints: OverrideUserConfig<boolean>
}

export type OverrideUserConfig<ValueType> = import('utility-types').DeepNonNullable<
  DeepOverrideValues<Config<string>, Record<string, any>, ValueType>
>

type DeepOverrideValues<OverrideObject, NestedObject, OvverrideValue> = {
  [Key in keyof OverrideObject]?: OverrideObject[Key] extends NestedObject
    ? DeepOverrideValues<OverrideObject[Key], NestedObject, OvverrideValue>
    : OvverrideValue
}
