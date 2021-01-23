import React, { isValidElement } from 'react'
import { render } from '@testing-library/react'

import { breakpointFactory } from './breakpointFactory.util'
import { ParsedOptions } from '../../..'

describe('breakpointFactory', () => {
  const defaultOptions: ParsedOptions = {
    breakpointCSSClass: false,
    log: false,
    isServer: false,
    ssr: {
      config: null,
      rehydrate: false,
    },
  }

  it('returns valid component', () => {
    const Result = breakpointFactory('test', defaultOptions)

    expect(isValidElement(<Result>test</Result>)).toBeTruthy()
  })

  it('adds correct name to component', () => {
    const Result = breakpointFactory('test', defaultOptions)

    expect(Result.displayName).toEqual('Breakpoint.test')
  })

  it('supports FaCC', () => {
    const Result = breakpointFactory('test', defaultOptions)

    const { getByText } = render(<Result>{match => `${match}`}</Result>)

    expect(getByText('false')).toBeDefined()
  })
})
