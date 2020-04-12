import { breakpointsStoreInstance } from 'BreakpointsStore'

import { normalizeBreakpointsConfig } from './utils/normalizeMediaQueryDict'
import { providerFactory } from './utils/providerFactory'
import { parseOptions } from './utils/parseOptions'

export function initMatchBreakpoints(breakpointsConfig: Rmb.Config<string>, options?: Rmb.Options) {
  const clientNormalizedBreakpointsConfig = normalizeBreakpointsConfig(breakpointsConfig)
  const parsedOptions = parseOptions(options)

  breakpointsStoreInstance.buildBreakpointComponents(clientNormalizedBreakpointsConfig, parsedOptions)

  return providerFactory(clientNormalizedBreakpointsConfig, parsedOptions)
}
