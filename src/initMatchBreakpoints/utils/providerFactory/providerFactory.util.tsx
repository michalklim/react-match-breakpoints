import React, { FunctionComponent, useEffect, useState } from 'react'

import { BreakpointsContext, generateInitialState } from '../../../BreakpointsContext'

type ProviderFactory = (normalizedMediaQueryDict: NormalizedMediaQueryDict) => FunctionComponent

export const providerFactory: ProviderFactory = normalizedMediaQueryDict => {
  const initialState = generateInitialState(normalizedMediaQueryDict)

  const Provider: FunctionComponent = ({ children }) => {
    const [state, setState] = useState(initialState)

    useEffect(() => {
      Object.entries(normalizedMediaQueryDict).forEach(([key, value]) => {
        if (typeof value !== 'boolean') {
          value.addListener(mq => {
            setState(prevState => ({
              ...prevState,
              [key]: mq.matches,
            }))
          })
        }
      })
    }, [])

    return <BreakpointsContext.Provider value={state}>{children}</BreakpointsContext.Provider>
  }

  return Provider
}
