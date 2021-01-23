import React, { Fragment, FunctionComponent, ReactNode, useContext, useMemo } from 'react'
import { BreakpointsContext } from '../../../BreakpointsContext/index'
import { isFunction } from '../../../common/isFunction'
import { parseChildren } from '../parseChildren'
import { ParsedOptions } from '../../../'

type FaCC = (match: boolean) => ReactNode

interface BreakpointProps {
  children: FaCC | ReactNode
}
type BreakpointFactoryUtil = (breakpointId: string, options: ParsedOptions) => FunctionComponent<BreakpointProps>

export const breakpointFactory: BreakpointFactoryUtil = (breakpointId, options) => {
  const Breakpoint: FunctionComponent = ({ children }) => {
    const state = useContext(BreakpointsContext)
    const breakpointState = !!state[breakpointId]

    const parsedChildren = useMemo<ReactNode>(() => {
      return options.breakpointCSSClass ? parseChildren(children, breakpointId) : children
    }, [children])

    if (isFunction(children)) {
      return children(breakpointState)
    }

    return breakpointState ? parsedChildren : <Fragment />
  }

  Breakpoint.displayName = `Breakpoint.${breakpointId}`

  return Breakpoint
}
