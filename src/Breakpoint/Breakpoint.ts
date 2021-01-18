import { set } from '../common/set'
import { BreakpointComponent } from '../'
import { breakpointFactory } from './utils/breakpointFactory'

export const initBreakpointSymbol = Symbol()

export const Breakpoint: BreakpointComponent = {
  [initBreakpointSymbol]: function(normalizedConfig, options) {
    return Object.keys(normalizedConfig).forEach(breakpointPath => {
      const Breakpoint = breakpointFactory(breakpointPath, options)

      set(this, breakpointPath, Breakpoint)
    })
  },
}
