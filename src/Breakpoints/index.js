/* global process */
import get from 'lodash/get'
import warning from 'warning'

import { capitalize, isObject } from '../utils'
import withBreakpoints from '../withBreakpoints'

class BreakpointsStore {
  generateComponents(components, renameFn, parentPath, parentObj) {
    return Object.keys(components).forEach(componentKey => {
      const rename = item => (renameFn ? renameFn(item) : capitalize(item))
      const componentName = rename(componentKey)
      const componentValue = components[componentKey]

      if (isObject(componentValue)) {
        parentObj[componentName] = {}
        this.generateComponents(
          componentValue,
          renameFn,
          [...parentPath, componentKey],
          parentObj[componentName]
        )
      } else {
        const breakpointsPath = parentPath.length
          ? `${parentPath.join('.')}.${componentKey}`
          : componentKey

        const Component = withBreakpoints(
          ({ children, breakpoints }) =>
            breakpoints && get(breakpoints, breakpointsPath) ? children : null
        )

        Component.displayName = parentPath.length
          ? `Breakpoints.${parentPath.map(rename).join('.')}.${componentName}`
          : `Breakpoints.${componentName}`

        parentObj[componentName] = Component
      }
    }, {})
  }

  buildBreakpointsComponents(config, componentRenameFn) {
    this.generateComponents(config, componentRenameFn, [], this)
  }
}

export const breakpointsStoreInstance = new BreakpointsStore()
export const proxiedBreakpointsStoreInstance = new Proxy(breakpointsStoreInstance, {
  get: (target, propKey) => {
    const shouldNotShowWarning =
      propKey in target || propKey === '__esModule' || process.env.NODE_ENV === 'production'

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
