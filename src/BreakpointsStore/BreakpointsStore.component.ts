import set from 'lodash/set'

class BreakpointsStore {
  // private mapBreakpointsStateToComponents<T>(breakpointsState: T, pathMap: string[] = [], store: BreakpointsStore) {
  // Object.entries(breakpointsState).forEach(([stateKey, stateValue]) => {
  //   if (isObject(stateValue)) {
  //     store[stateKey] = {}
  //     this.mapBreakpointsStateToComponents(stateValue, [...pathMap, stateKey], store[stateKey])
  //   } else {
  //     const pathString = pathMap.length !== 0 ? `${pathMap.join('.')}` : stateKey
  //     const component = ({ children, breakpointsState }) => null
  //   }
  // })

  //   return Object.keys(components).forEach(componentKey => {
  //
  //     if (isObject(componentValue)) {
  //       parentObj[componentName] = {}
  //       this.generateComponents(componentValue, renameFn, [...parentPath, componentKey], parentObj[componentName])
  //     } else {
  //       const breakpointsPath = parentPath.length ? `${parentPath.join('.')}.${componentKey}` : componentKey
  //
  //       const Component = withBreakpoints(({ children, breakpoints }) => {
  //         if (typeof componentValue === 'boolean') {
  //           return componentValue ? children : null
  //         } else {
  //           return breakpoints && get(breakpoints, breakpointsPath) ? children : null
  //         }
  //       })
  //
  //       Component.displayName = parentPath.length
  //         ? `Breakpoints.${parentPath.map(rename).join('.')}.${componentName}`
  //         : `Breakpoints.${componentName}`
  //
  //       parentObj[componentName] = Component
  //     }
  //   }, {})
  //}

  public buildBreakpointComponents(normalizedMediaQueryDict: NormalizedMediaQueryDict) {
    Object.keys(normalizedMediaQueryDict).forEach(key => {
      const Component = ({ children }) => {
        return null
      }

      set(this, key, Component)
    })
  }
}

export const breakpointsStoreInstance = new BreakpointsStore()
export const proxiedBreakpointsStoreInstance = new Proxy(breakpointsStoreInstance, {
  get: (target, propKey) => {
    const isMissingComponent = !(propKey in target) && propKey !== '__esModule' && process.env.NODE_ENV !== 'production'

    if (isMissingComponent) {
      console.warn(
        '[React Match Breakpoints] You are trying to use component(' +
          propKey +
          '). ' +
          "That name doesn't match any breakpoint you have provided. " +
          'Current breakpoints components names are: ' +
          Object.keys(target).join(', '),
      )
    }

    return !isMissingComponent ? target[propKey] : () => null
  },
})
