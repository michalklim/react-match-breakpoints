import { set } from '../utils/set'

import { breakpointFactory } from './utils/breakpointFactory'

export class BreakpointsStore {
  public buildBreakpointComponents(clientNormalizedBreakpointsConfig: RmbConfig<string>, options?: RmbParsedOptions) {
    Object.keys(clientNormalizedBreakpointsConfig).forEach(breakpointId => {
      const Breakpoint = breakpointFactory(breakpointId, options)

      set(this, breakpointId, Breakpoint)
    })
  }
}

export const breakpointsStoreInstance = new BreakpointsStore()
