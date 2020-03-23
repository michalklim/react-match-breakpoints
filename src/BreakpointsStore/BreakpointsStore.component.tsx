import React, { Fragment, FunctionComponent } from 'react'
import set from 'lodash/set'
import get from 'lodash/get'

import { BreakpointsContext } from '../BreakpointsContext'

export class BreakpointsStore {
  public buildBreakpointComponents(normalizedMediaQueryDict: NormalizedMediaQueryDict) {
    Object.keys(normalizedMediaQueryDict).forEach(key => {
      const Breakpoint: FunctionComponent = ({ children }) => {
        return (
          <BreakpointsContext.Consumer>
            {breakpoints => (breakpoints && get(breakpoints, key) ? children : <Fragment />)}
          </BreakpointsContext.Consumer>
        )
      }

      Breakpoint.displayName = `Breakpoint.${key}`

      set(this, key, Breakpoint)
    })
  }
}

export const breakpointsStoreInstance = new BreakpointsStore()
