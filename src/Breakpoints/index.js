import React from 'react'

import { capitalizeFirstLetter } from '../utils'
import withBreakpoints from '../withBreakpoints'

class BreakpointsStore {
    buildBreakpointsComponents(breakpoints, componentRenameFn) {
        Object.keys(breakpoints).forEach(breakpoint => {
            const componentName = componentRenameFn ? componentRenameFn(breakpoint) : capitalizeFirstLetter(breakpoint)
            this[componentName] = withBreakpoints(({children, breakpoints}) => breakpoints[breakpoint] && children)
            this[componentName].displayName = `Breakpoints.Components${componentName}`
        })
    }
}

const breakpointsStoreInstance = new BreakpointsStore()

export default breakpointsStoreInstance