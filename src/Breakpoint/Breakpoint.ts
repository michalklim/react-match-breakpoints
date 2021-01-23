import { set } from '../common/set'
import { BreakpointComponent } from '../'
import { breakpointFactory } from './utils/breakpointFactory'
import { proxifyBreakpoint } from './utils/proxifyBreakpoint'

export const initBreakpointSymbol = Symbol()
export const proxifySymbol = Symbol()

export const Breakpoint: BreakpointComponent = {
  [initBreakpointSymbol]: function(normalizedConfig, options) {
    return Object.keys(normalizedConfig).forEach(breakpointPath => {
      const Breakpoint = breakpointFactory(breakpointPath, options)

      set(this, breakpointPath, Breakpoint)
    })
  },
  [proxifySymbol]: function(options) {
    proxifyBreakpoint(this, options)
  },
}
