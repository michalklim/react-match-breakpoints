import { set } from 'common/set'
import { breakpointFactory } from './utils/breakpointFactory'

export class BreakpointsStore {
  public buildBreakpointComponents(
    clientNormalizedBreakpointsConfig: Rmb.NormalizedConfig<string>,
    options?: Rmb.ParsedOptions,
  ) {
    Object.keys(clientNormalizedBreakpointsConfig).forEach(breakpointId => {
      const Breakpoint = breakpointFactory(breakpointId, options)

      set(this, breakpointId, Breakpoint)
    })
  }
}

export const breakpointsStoreInstance = new BreakpointsStore()
