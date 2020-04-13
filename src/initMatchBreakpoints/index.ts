import { breakpointsStoreInstance } from 'BreakpointsStore/index'

import { normalizeConfig } from './utils/normalizeConfig'
import { providerFactory } from './utils/providerFactory'
import { parseOptions } from './utils/parseOptions'

export function initMatchBreakpoints(breakpointsConfig: Rmb.Config, options?: Rmb.Options) {
  const clientNormalizedBreakpointsConfig = normalizeConfig(breakpointsConfig)
  const parsedOptions = parseOptions(options)

  breakpointsStoreInstance.buildBreakpointComponents(clientNormalizedBreakpointsConfig, parsedOptions)

  return providerFactory(clientNormalizedBreakpointsConfig, parsedOptions)
}
