import React, { FunctionComponent, ReactNode, useEffect, useState } from 'react'

import { generateInitialState } from '../generateInitialState'
import { Context } from '../../../Context'

type ProviderFactory = (normalizedMediaQueryDict: NormalizedMediaQueryDict) => ReactNode

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

    return <Context.Provider value={state}>{children}</Context.Provider>
  }

  return Provider
}
