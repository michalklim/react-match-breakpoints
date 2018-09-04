import React from 'react'
import warning from 'warning'

import { capitalizeFirstLetter } from '../utils'
import withBreakpoints from '../withBreakpoints'

class BreakpointsStore {
  buildBreakpointsComponents(breakpoints, componentRenameFn) {
    Object.keys(breakpoints).forEach(breakpoint => {
      const componentName = componentRenameFn ? componentRenameFn(breakpoint) : capitalizeFirstLetter(breakpoint)
      this[componentName] = withBreakpoints(({ children, breakpoints }) => breakpoints[breakpoint] && children)
      this[componentName].displayName = `Breakpoints.${componentName}`
    })
  }
}

const breakpointsStoreInstance = new Proxy(new BreakpointsStore(), {
  get: function(target, name) {
    if (!(name in target) && name !== '__esModule') {
      if (process.env.NODE_ENV !== 'production') {
        warning(
          false,
          `[React Match Breakpoints] You are trying to use component (${
            name
          }) that name doesn\'t match any breakpoint you have provided. Current breakpoints components names: ${Object.keys(
            target
          ).join(', ')}`
        )
      }
      return () => null
    }
    return target[name]
  },
})

export default breakpointsStoreInstance
