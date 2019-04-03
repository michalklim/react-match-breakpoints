/* global process */
import get from 'lodash/get'
import warning from 'warning'
import isObject from 'lodash/isObject'
import isFunction from 'lodash/isFunction'

import { capitalize, isServer } from '../utils'
import withBreakpoints from '../withBreakpoints'

class BreakpointsStore {
  generateComponents(config, renameFn, parentPath, parentObj, serverConfig) {
    const components = isServer && serverConfig ? serverConfig : config

    return Object.keys(config).forEach(componentKey => {
      const rename = item => (renameFn ? renameFn(item) : capitalize(item))
      const componentName = rename(componentKey)
      const componentValue = components[componentKey]

      if (isObject(componentValue)) {
        parentObj[componentName] = {}
        this.generateComponents(
          componentValue,
          renameFn,
          [...parentPath, componentKey],
          parentObj[componentName],
          serverConfig
        )
      } else {
        const breakpointsPath = parentPath.length
          ? `${parentPath.join('.')}.${componentKey}`
          : componentKey
        const Component = withBreakpoints(({ children, breakpoints }) => {
          if (typeof componentValue === 'boolean') {
            return componentValue ? children : null
          } else {
            return breakpoints && get(breakpoints, breakpointsPath) ? children : null
          }
        })

        Component.displayName = parentPath.length
          ? `Breakpoints.${parentPath.map(rename).join('.')}.${componentName}`
          : `Breakpoints.${componentName}`

        parentObj[componentName] = Component
      }
    }, {})
  }

  buildBreakpointsComponents(config, componentRenameFn, serverConfig) {
    this.generateComponents(config, componentRenameFn, [], this, serverConfig)
  }
}

const getHandler = (target, propKey) => {
  const component = target[propKey]

  const shouldNotShowWarning =
    component || propKey === '__esModule' || process.env.NODE_ENV === 'production'

  if (!shouldNotShowWarning) {
    warning(
      shouldNotShowWarning,
      '[React Match Breakpoints] You are trying to use component(' +
        propKey +
        '). ' +
        "That name doesn't match any breakpoint you have provided. " +
        'Current breakpoints components names are: ' +
        Object.keys(target).join(', ')
    )

    return null
  }

  if (isObject(component) && !isFunction(component)) {
    return new Proxy(component, {
      get: getHandler,
    })
  }

  return shouldNotShowWarning ? Reflect.get(target, propKey) : () => null
}

export const breakpointsStoreInstance = new BreakpointsStore()
export const proxiedBreakpointsStoreInstance = new Proxy(breakpointsStoreInstance, {
  get: getHandler,
})
