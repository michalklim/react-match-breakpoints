import { Breakpoint, initBreakpointSymbol } from '../Breakpoint'
import { normalizeConfig } from './utils/normalizeConfig'
import { providerFactory } from './utils/providerFactory'
import { parseOptions } from './utils/parseOptions'
import { Config, Options } from '../'

export function initBreakpoints(breakpointsConfig: Config, options?: Options) {
  const normalizedConfig = normalizeConfig(breakpointsConfig)
  const parsedOptions = parseOptions(options)

  Breakpoint[initBreakpointSymbol](normalizedConfig, parsedOptions)

  return providerFactory(normalizedConfig, parsedOptions)
}
