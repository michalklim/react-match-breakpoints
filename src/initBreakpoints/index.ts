import { Breakpoint, initBreakpointSymbol } from '../Breakpoint'
import { normalizeConfig } from './utils/normalizeConfig'
import { providerFactory } from './utils/providerFactory'
import { parseOptions } from './utils/parseOptions'
import { Config, Options } from '../'
import { proxifySymbol } from '../Breakpoint/Breakpoint'

export function initBreakpoints(breakpointsConfig: Config<string>, options?: Options) {
  const normalizedConfig = normalizeConfig(breakpointsConfig)
  const parsedOptions = parseOptions(options)

  const Provider = providerFactory(normalizedConfig, parsedOptions)
  Breakpoint[initBreakpointSymbol](normalizedConfig, parsedOptions)

  if (Proxy) {
    Breakpoint[proxifySymbol](parsedOptions)
  }

  return Provider
}
