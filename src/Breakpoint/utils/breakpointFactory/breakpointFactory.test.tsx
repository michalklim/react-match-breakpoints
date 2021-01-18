import React, { isValidElement } from 'react'
import { render } from '@testing-library/react'

import { breakpointFactory } from './breakpointFactory.util'

describe('breakpointFactory', () => {
  it('returns valid component', () => {
    const Result = breakpointFactory('test')

    expect(isValidElement(<Result>test</Result>)).toBeTruthy()
  })

  it('adds correct name to component', () => {
    const Result = breakpointFactory('test')

    expect(Result.displayName).toEqual('Breakpoint.test')
  })

  it('supports FaCC', () => {
    const Result = breakpointFactory('test')

    const { getByText } = render(<Result>{match => `${match}`}</Result>)

    expect(getByText('false')).toBeDefined()
  })
})
