import React, { FunctionComponent, useEffect, useState } from 'react'

import { BreakpointsContext, generateInitialState } from 'BreakpointsContext'

type ProviderFactory = (
  clientNormalizedBreakpointsConfig: Rmb.NormalizedConfig<string>,
  options?: Rmb.ParsedOptions,
) => FunctionComponent

export const providerFactory: ProviderFactory = (clientNormalizedBreakpointsConfig, options) => {
  const initialState = generateInitialState(clientNormalizedBreakpointsConfig, options)

  const Provider: FunctionComponent = ({ children }) => {
    const [state, setState] = useState(initialState)

    useEffect(() => {
      Object.entries(clientNormalizedBreakpointsConfig).forEach(([key, value]) => {
        const matchMediaValue = matchMedia(value)

        if (typeof options?.ssr !== 'undefined') {
          setState(prevState => ({
            ...prevState,
            [key]: matchMediaValue.matches,
          }))
        }

        matchMediaValue.addListener(mq => {
          setState(prevState => ({
            ...prevState,
            [key]: mq.matches,
          }))
        })
      })
    }, [])

    return <BreakpointsContext.Provider value={state}>{children}</BreakpointsContext.Provider>
  }

  return Provider
}
