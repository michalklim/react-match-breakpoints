import React, { FunctionComponent, useEffect, useState } from 'react'

import { BreakpointsContext, generateInitialState } from '../../../BreakpointsContext'
import { NormalizedConfig, ParsedOptions } from '../../../'

type ProviderFactory = (
  clientNormalizedBreakpointsConfig: NormalizedConfig,
  options?: ParsedOptions,
) => FunctionComponent

export const providerFactory: ProviderFactory = (clientNormalizedBreakpointsConfig, options) => {
  const initialState = generateInitialState(clientNormalizedBreakpointsConfig, options)

  const Provider: FunctionComponent = ({ children }) => {
    const [state, setState] = useState<NormalizedConfig>(initialState)

    useEffect(() => {
      Object.entries(clientNormalizedBreakpointsConfig).forEach(([key, value]) => {
        const matchMediaValue = matchMedia(value as string)

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
