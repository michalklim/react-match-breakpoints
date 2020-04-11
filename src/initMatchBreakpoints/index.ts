import { normalizeBreakpointsConfig } from './utils/normalizeMediaQueryDict'
import { breakpointsStoreInstance } from '../BreakpointsStore'
import { providerFactory } from './utils/providerFactory'
import { parseOptions } from './utils/parseOptions'

export function initMatchBreakpoints(breakpointsConfig: RmbConfig<string>, options?: RmbOptions) {
  const clientNormalizedBreakpointsConfig = normalizeBreakpointsConfig<string>(breakpointsConfig)
  const parsedOptions = parseOptions(options)

  breakpointsStoreInstance.buildBreakpointComponents(clientNormalizedBreakpointsConfig, parsedOptions)

  return providerFactory(clientNormalizedBreakpointsConfig, parsedOptions)
}
