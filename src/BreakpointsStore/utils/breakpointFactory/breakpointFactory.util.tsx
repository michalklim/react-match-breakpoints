import React, { Fragment, FunctionComponent } from 'react'
import { BreakpointsContext } from '../../../BreakpointsContext'
import { get } from '../../../utils/get'

type BreakpointFactoryUtil = (breakpointId: string) => FunctionComponent

export const breakpointFactory: BreakpointFactoryUtil = breakpointId => {
  const Breakpoint: FunctionComponent = ({ children }) => {
    return (
      <BreakpointsContext.Consumer>
        {breakpoints => (breakpoints && get(breakpoints, breakpointId) ? children : <Fragment />)}
      </BreakpointsContext.Consumer>
    )
  }

  Breakpoint.displayName = `Breakpoint.${breakpointId}`

  return Breakpoint
}
