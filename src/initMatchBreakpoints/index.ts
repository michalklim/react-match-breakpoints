import { normalizeMediaQueryDict } from './utils/normalizeMediaQueryDict'
import { breakpointsStoreInstance } from '../BreakpointsStore'
import { providerFactory } from './utils/providerFactory'

export function initMatchBreakpoints(mediaQueriesDict: MediaQueryDict) {
  const normalizedMediaQueryDict = normalizeMediaQueryDict(mediaQueriesDict)
  breakpointsStoreInstance.buildBreakpointComponents(normalizedMediaQueryDict)

  return providerFactory(normalizedMediaQueryDict)
}
