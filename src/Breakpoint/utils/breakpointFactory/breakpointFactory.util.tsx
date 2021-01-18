import React, { Fragment, FunctionComponent, ReactNode, useContext, useEffect, useMemo, useRef, useState } from 'react'
import { BreakpointsContext } from '../../../BreakpointsContext/index'
import { isFunction } from '../../../common/isFunction'
import { parseChildren } from '../parseChildren'
import { ParsedOptions } from '../../../'

type FaCC = (match: boolean) => ReactNode

interface BreakpointProps {
  children: FaCC | ReactNode
}

type BreakpointFactoryUtil = (breakpointId: string, options?: ParsedOptions) => FunctionComponent<BreakpointProps>

const PassThrough: FunctionComponent = ({ children }) => <Fragment>{children}</Fragment>

export const breakpointFactory: BreakpointFactoryUtil = (breakpointId, options) => {
  const Breakpoint: FunctionComponent = ({ children }) => {
    const state = useContext(BreakpointsContext)
    const breakpointState = !!state[breakpointId]
    const initialBreakpointState = useRef(breakpointState)
    const [keyState, setKeyState] = useState('guessed')

    useEffect(() => {
      if (options?.ssr?.rehydrate && initialBreakpointState.current !== options.ssr.config[breakpointId]) {
        setKeyState('guessed-wrong')
      }
    }, [])

    const parsedChildren = useMemo<ReactNode>(() => {
      return options?.breakpointCSSClass ? parseChildren(children, breakpointId) : children
    }, [children])

    if (isFunction(children)) {
      return children(breakpointState)
    }

    return <PassThrough key={keyState}>{breakpointState ? parsedChildren : <Fragment />}</PassThrough>
  }

  Breakpoint.displayName = `Breakpoint.${breakpointId}`

  return Breakpoint
}
