import React, { Fragment } from 'react'
import { shallow, mount } from 'enzyme'

const mediaQueries = {
  isMobile: {
    small: 'screen and (max-width: 300px)',
    big: 'screen and (max-width: 500px)',
  },
  isTablet: 'screen and (min-width: 500px) and (max-width: 1200px)',
  isDesktop: 'screen and (min-width: 1201px)',
}

const serverMediaQueries = {
  isMobile: {
    small: true,
    big: false,
  },
  isTablet: false,
  isDesktop: false,
}

let Breakpoints
let createBreakpoints
let Provider

beforeEach(() => {
  jest.resetModules()

  Breakpoints = require('./index').proxiedBreakpointsStoreInstance
  createBreakpoints = require('../createBreakpoints')
  Provider = require('../Provider')
})

afterEach(() => {
  jest.clearAllMocks()
})

describe('<Breakpoints />', () => {
  it('builds components based on provided breakpoints names', () => {
    const breakpoints = createBreakpoints(mediaQueries)

    const wrapper = mount(
      <Provider breakpoints={breakpoints}>
        <div>
          <Breakpoints.IsMobile.Small />
          <Breakpoints.IsMobile.Big />
          <Breakpoints.IsTablet />
          <Breakpoints.IsDesktop />
        </div>
      </Provider>,
    )

    wrapper.unmount()
  })

  it('shows error message in console when trying to access Component that is not there', () => {
    const errorSpy = jest.spyOn(console, 'error').mockImplementation(() => {})

    const breakpoints = createBreakpoints(mediaQueries)

    shallow(
      <Provider breakpoints={breakpoints}>
        <div>
          <Breakpoints.IsBigDesktop />
        </div>
      </Provider>,
    )

    expect(errorSpy.mock.calls[0][0]).toMatch(
      '[React Match Breakpoints] You are trying to use component(IsBigDesktop). ' +
        "That name doesn't match any breakpoint you have provided. " +
        'Current breakpoints components names are: ' +
        'IsMobile, IsTablet, IsDesktop',
    )
  })

  it('renders child component only when breakpoint match', () => {
    const OnlyVisibleOnBigMobile = () => <div>mobile</div>
    const OnlyVisibleOnTablet = () => <div>tablet</div>

    const breakpoints = createBreakpoints(mediaQueries)

    const wrapper = mount(
      <Provider breakpoints={breakpoints}>
        <Fragment>
          <Breakpoints.IsMobile.Big>
            <OnlyVisibleOnBigMobile />
          </Breakpoints.IsMobile.Big>
          <Breakpoints.IsTablet>
            <OnlyVisibleOnTablet />
          </Breakpoints.IsTablet>
        </Fragment>
      </Provider>,
    )

    expect(wrapper.contains(OnlyVisibleOnBigMobile)).not.toBeTruthy()
    expect(wrapper.contains(OnlyVisibleOnTablet)).not.toBeTruthy()

    // Simulate mobile breakpoint
    wrapper.setState({
      isMobile: {
        big: true,
        small: false,
      },
      isTablet: false,
      isDesktop: false,
    })

    expect(wrapper.contains(OnlyVisibleOnBigMobile)).toBeTruthy()

    // Simulate tablet breakpoint
    wrapper.setState({
      isMobile: {
        big: false,
        small: false,
      },
      isTablet: true,
      isDesktop: false,
    })

    expect(wrapper.contains(OnlyVisibleOnTablet)).toBeTruthy()

    wrapper.unmount()
  })
})
