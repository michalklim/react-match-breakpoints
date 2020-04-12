import { breakpointsStoreInstance } from 'BreakpointsStore'

import { normalizeBreakpointsConfig } from './utils/normalizeMediaQueryDict'
import { providerFactory } from './utils/providerFactory'
import { parseOptions } from './utils/parseOptions'

export function initMatchBreakpoints(breakpointsConfig: Rmb.Config, options?: Rmb.Options) {
  const clientNormalizedBreakpointsConfig = normalizeBreakpointsConfig<string>(breakpointsConfig)
  const parsedOptions = parseOptions(options)

  breakpointsStoreInstance.buildBreakpointComponents(clientNormalizedBreakpointsConfig, parsedOptions)

  return providerFactory(clientNormalizedBreakpointsConfig, parsedOptions)
}
