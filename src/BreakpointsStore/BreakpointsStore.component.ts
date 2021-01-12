import { set } from '../common/set'
import { NormalizedConfig, ParsedOptions } from '../types'
import { breakpointFactory } from './utils/breakpointFactory'

export class BreakpointsStore {
  public buildBreakpointComponents(
    clientNormalizedBreakpointsConfig: NormalizedConfig<string>,
    options?: ParsedOptions,
  ) {
    Object.keys(clientNormalizedBreakpointsConfig).forEach(breakpointId => {
      const Breakpoint = breakpointFactory(breakpointId, options)

      set(this, breakpointId, Breakpoint)
    })
  }
}

export const breakpointsStoreInstance = new BreakpointsStore()
