import React from 'react'

const breakpoints = {
  isMobile: 'screen and (max-width: 500px)',
  isTablet: 'screen and (min-width: 500px) and (max-width: 1200px)',
  isDesktop: 'screen and (min-width: 1201px)',
}

let createBreakpoints
let breakpointsStoreInstance

beforeEach(() => {
  jest.resetModules()

  createBreakpoints = require('../createBreakpoints')
  breakpointsStoreInstance = require('../Breakpoints').breakpointsStoreInstance
})

describe('createBreakpoints', () => {
  it('builds components with uppercase first letter', () => {
    createBreakpoints(breakpoints)

    expect(breakpointsStoreInstance).toEqual(
      expect.objectContaining({
        IsMobile: expect.any(Function),
        IsTablet: expect.any(Function),
        IsDesktop: expect.any(Function),
      })
    )
  })

  it('renames components if user provide rename method', () => {
    const renameFn = breakpointName => `${breakpointName}Test`

    createBreakpoints(breakpoints, renameFn)

    expect(breakpointsStoreInstance).toEqual(
      expect.objectContaining({
        isMobileTest: expect.any(Function),
        isTabletTest: expect.any(Function),
        isDesktopTest: expect.any(Function),
      })
    )
  })
})
