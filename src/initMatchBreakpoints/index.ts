import { breakpointsStoreInstance } from '../BreakpointsStore'

import { normalizeConfig } from './utils/normalizeConfig'
import { providerFactory } from './utils/providerFactory'
import { parseOptions } from './utils/parseOptions'
import { Config, Options } from '../types'

export function initMatchBreakpoints(breakpointsConfig: Config, options?: Options) {
  const clientNormalizedBreakpointsConfig = normalizeConfig(breakpointsConfig)
  const parsedOptions = parseOptions(options)

  breakpointsStoreInstance.buildBreakpointComponents(clientNormalizedBreakpointsConfig, parsedOptions)

  return providerFactory(clientNormalizedBreakpointsConfig, parsedOptions)
}
