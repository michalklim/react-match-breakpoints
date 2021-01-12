import React, { ComponentType, FunctionComponent, useContext, useMemo } from 'react'
import { Subtract } from 'utility-types'

import { BreakpointsContext, denormalizeBreakpointsState } from '../BreakpointsContext'
import { InjectedBreakpointsProps } from '../types'

export const withBreakpoints = <P extends InjectedBreakpointsProps>(Component: ComponentType<P>) => {
  const EnhancedComponent: FunctionComponent<Subtract<P, InjectedBreakpointsProps>> = props => {
    const state = useContext(BreakpointsContext)
    const denormalizedBreakpointsState = useMemo(() => denormalizeBreakpointsState(state), [state])

    return <Component {...(props as P)} breakpoints={denormalizedBreakpointsState} />
  }

  const getDisplayName = (WrappedComponent: ComponentType<P>) =>
    WrappedComponent.displayName || WrappedComponent.name || 'Component'
  EnhancedComponent.displayName = `withBreakpoints(${getDisplayName(Component)})`

  return EnhancedComponent
}
