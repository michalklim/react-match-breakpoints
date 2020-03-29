import React, { isValidElement } from 'react'
import { breakpointFactory } from './breakpointFactory.util'

describe('breakpointFactory', () => {
  it('returns valid component', () => {
    const Result = breakpointFactory('test')

    expect(isValidElement(<Result />)).toBeTruthy()
  })

  it('adds correct name to component', () => {
    const Result = breakpointFactory('test')

    expect(Result.displayName).toEqual('Breakpoint.test')
  })
})
