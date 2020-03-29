import React, { Fragment, FunctionComponent, useContext } from 'react'
import { BreakpointsContext } from '../../../BreakpointsContext'
import { get } from '../../../utils/get'

type BreakpointFactoryUtil = (breakpointId: string) => FunctionComponent

export const breakpointFactory: BreakpointFactoryUtil = breakpointId => {
  const Breakpoint: FunctionComponent = ({ children }) => {
    const state = useContext(BreakpointsContext)
    const breakpointState = get<boolean>(state, breakpointId)

    if (typeof children === 'function') {
      return children(breakpointState)
    }

    if (breakpointState) {
      return children
    }

    return <Fragment />
  }

  Breakpoint.displayName = `Breakpoint.${breakpointId}`

  return Breakpoint
}
