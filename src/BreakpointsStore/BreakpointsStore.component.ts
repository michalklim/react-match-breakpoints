import { set } from '../utils/set'

import { breakpointFactory } from './utils/breakpointFactory'

export class BreakpointsStore {
  public buildBreakpointComponents(normalizedMediaQueryDict: NormalizedMediaQueryDict) {
    Object.keys(normalizedMediaQueryDict).forEach(breakpointId => {
      const Breakpoint = breakpointFactory(breakpointId)

      set(this, breakpointId, Breakpoint)
    })
  }
}

export const breakpointsStoreInstance = new BreakpointsStore()
