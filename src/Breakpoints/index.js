import React from 'react'
import warning from 'warning'

import { capitalizeFirstLetter } from '../utils'
import withBreakpoints from '../withBreakpoints'

class BreakpointsStore {
  buildBreakpointsComponents(queries, componentRenameFn) {
    Object.keys(queries).forEach(queryName => {
      const componentName = componentRenameFn ? componentRenameFn(queryName) : capitalizeFirstLetter(queryName)

      this[componentName] = withBreakpoints(({ children, breakpoints }) => {
        return breakpoints && breakpoints[queryName] ? children : null
      })
      this[componentName].displayName = `Breakpoints.${componentName}`
    })
  }
}

export const breakpointsStoreInstance = new BreakpointsStore()
export const proxiedBreakpointsStoreInstance = new Proxy(breakpointsStoreInstance, {
  get: (target, propKey) => {
    const shouldNotShowWarning = propKey in target || propKey === '__esModule' || process.env.NODE_ENV === 'production'

    warning(
      shouldNotShowWarning,
      '[React Match Breakpoints] You are trying to use component(' +
        propKey +
        '). ' +
        "That name doesn't match any breakpoint you have provided. " +
        'Current breakpoints components names are: ' +
        Object.keys(target).join(', ')
    )

    return shouldNotShowWarning ? target[propKey] : () => null
  },
})
