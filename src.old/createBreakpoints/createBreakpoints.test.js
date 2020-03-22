import React from 'react'

const breakpoints = {
  isMobile: 'screen and (max-width: 500px)',
  isTablet: 'screen and (min-width: 500px) and (max-width: 1200px)',
  isDesktop: 'screen and (min-width: 1201px)',
}

const nestedBreakpoints = {
  isMobile: {
    small: 'screen and (max-width: 500px)',
    big: 'screen and (max-width: 500px)',
  },
  isTablet: {
    small: 'screen and (max-width: 500px)',
    big: 'screen and (max-width: 500px)',
  },
  isDesktop: 'screen and (min-width: 1201px)',
}

let createBreakpoints
let breakpointsStoreInstance

beforeEach(() => {
  jest.resetModules()

  createBreakpoints = require('./index')
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
      }),
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
      }),
    )
  })

  it('Correctly builds nested components', () => {
    createBreakpoints(nestedBreakpoints)

    expect(breakpointsStoreInstance).toEqual(
      expect.objectContaining({
        IsMobile: {
          Small: expect.any(Function),
          Big: expect.any(Function),
        },
        IsTablet: {
          Small: expect.any(Function),
          Big: expect.any(Function),
        },
        IsDesktop: expect.any(Function),
      }),
    )
  })
})
