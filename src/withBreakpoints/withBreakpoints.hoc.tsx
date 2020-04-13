import React, { ComponentType, FunctionComponent, useContext, useMemo } from 'react'
import { Subtract } from 'utility-types'

import { BreakpointsContext, denormalizeBreakpointsState } from 'BreakpointsContext/index'

export const withBreakpoints = <P extends Rmb.InjectedBreakpointsProps>(Component: ComponentType<P>) => {
  const EnhancedComponent: FunctionComponent<Subtract<P, Rmb.InjectedBreakpointsProps>> = props => {
    const state = useContext(BreakpointsContext)
    const denormalizedBreakpointsState = useMemo(() => denormalizeBreakpointsState(state), [state])

    return <Component {...(props as P)} breakpoints={denormalizedBreakpointsState} />
  }

  const getDisplayName = (WrappedComponent: ComponentType<P>) =>
    WrappedComponent.displayName || WrappedComponent.name || 'Component'
  EnhancedComponent.displayName = `withBreakpoints(${getDisplayName(Component)})`

  return EnhancedComponent
}
