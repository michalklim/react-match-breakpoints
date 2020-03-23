import React, { Component, ComponentType, FunctionComponent } from 'react'
import { Subtract } from 'utility-types'

import { BreakpointsContext, denormalizeBreakpointsState } from '../BreakpointsContext'

export const withBreakpoints = <P extends InjectedBreakpointsProps>(Component: ComponentType<P>) => {
  const EnhancedComponent: FunctionComponent<Subtract<P, InjectedBreakpointsProps>> = props => {
    return (
      <BreakpointsContext.Consumer>
        {breakpoints => <Component {...(props as P)} breakpoints={denormalizeBreakpointsState(breakpoints)} />}
      </BreakpointsContext.Consumer>
    )
  }

  const getDisplayName = (WrappedComponent: ComponentType<P>) =>
    WrappedComponent.displayName || WrappedComponent.name || 'Component'
  EnhancedComponent.displayName = `withBreakpoints(${getDisplayName(Component)})`

  return EnhancedComponent
}
