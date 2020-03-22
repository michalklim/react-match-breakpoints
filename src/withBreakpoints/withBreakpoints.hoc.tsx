import React, { Component, ComponentType, FunctionComponent } from 'react'
import { Subtract } from 'utility-types'

import { Context } from '../Context'

interface InjectedBreakpointsProps {
  breakpoints: BreakpointsState
}

export const withBreakpoints = <P extends InjectedBreakpointsProps>(Component: ComponentType<P>) => {
  const EnhancedComponent: FunctionComponent<Subtract<P, InjectedBreakpointsProps>> = props => {
    return (
      <Context.Consumer>{breakpoints => <Component {...(props as P)} breakpoints={breakpoints} />}</Context.Consumer>
    )
  }

  const getDisplayName = (WrappedComponent: ComponentType<P>) =>
    WrappedComponent.displayName || WrappedComponent.name || 'Component'
  EnhancedComponent.displayName = `withBreakpoints(${getDisplayName(Component)})`

  return EnhancedComponent
}
