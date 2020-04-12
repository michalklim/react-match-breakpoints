import React, { Children, cloneElement, Fragment, FunctionComponent, useContext, useEffect, useState } from 'react'
import { BreakpointsContext } from '../../../BreakpointsContext'

type BreakpointFactoryUtil = (breakpointId: string, options?: Rmb.ParsedOptions) => FunctionComponent

const PassThrough: FunctionComponent = ({ children }) => <Fragment>{children}</Fragment>

export const breakpointFactory: BreakpointFactoryUtil = (breakpointId, options) => {
  const Breakpoint: FunctionComponent = ({ children }) => {
    const state = useContext(BreakpointsContext)
    const breakpointState = state[breakpointId]
    const [keyState, setKeyState] = useState('guessed')

    useEffect(() => {
      if (options?.ssr?.config && options?.ssr.rehydrate && breakpointState !== options.ssr.config[breakpointId]) {
        setKeyState('guessed-wrong')
      }
    }, [breakpointState])

    return (
      <PassThrough key={keyState}>
        {breakpointState ? (
          Children.map(children, child => {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const className = (child as any)?.props?.className
            const modifiedClassName = className ? `${className} rmb-${breakpointId}` : `rmb-${breakpointId}`
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const modifiedChildren = cloneElement(child as any, { className: modifiedClassName })
            return modifiedChildren
          })
        ) : (
          <Fragment />
        )}
      </PassThrough>
    )
  }

  Breakpoint.displayName = `Breakpoint.${breakpointId}`

  return Breakpoint
}
