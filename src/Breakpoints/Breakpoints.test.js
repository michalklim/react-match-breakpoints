import React from 'react'
import { shallow, mount } from 'enzyme'

const breakpoints = {
  isMobile: `screen and (max-width: 500px)`,
  isTablet: `screen and (min-width: 500px) and (max-width: 1200px)`,
  isDesktop: `screen and (min-width: 1201px)`,
}

let Breakpoints = require('../Breakpoints').proxiedBreakpointsStoreInstance
let createBreakpointsComponents = require('../createBreakpointsComponents')
let Provider = require('../Provider')

beforeEach(() => {
  jest.resetModules()

  Breakpoints = require('../Breakpoints').proxiedBreakpointsStoreInstance
  createBreakpointsComponents = require('../createBreakpointsComponents')
  Provider = require('../Provider')
})

afterEach(() => {
  jest.clearAllMocks()
})

describe('<Breakpoints />', () => {
  it('builds components based on provided breakpoints names', () => {
    createBreakpointsComponents(breakpoints)

    const wrapper = mount(
      <Provider breakpoints={breakpoints}>
        <div>
          <Breakpoints.IsMobile />
          <Breakpoints.IsTablet />
          <Breakpoints.IsDesktop />
        </div>
      </Provider>
    )

    wrapper.unmount()
  })

  it('shows error message in console when trying to access Component that is not there', () => {
    const errorSpy = jest.spyOn(console, 'error').mockImplementation(() => {})

    createBreakpointsComponents(breakpoints)

    shallow(
      <Provider breakpoints={breakpoints}>
        <div>
          <Breakpoints.IsBigDesktop />
        </div>
      </Provider>
    )

    expect(errorSpy.mock.calls[0][0]).toMatch(
      '[React Match Breakpoints] You are trying to use component(IsBigDesktop). ' +
        "That name doesn't match any breakpoint you have provided. " +
        'Current breakpoints components names are: ' +
        'IsMobile, IsTablet, IsDesktop'
    )
  })

  it('renders child component only when breakpoint match', () => {
    const OnlyVisibleOnMobile = () => <div>test</div>

    createBreakpointsComponents(breakpoints)

    const wrapper = mount(
      <Provider breakpoints={breakpoints}>
        <Breakpoints.IsMobile>
          <OnlyVisibleOnMobile />
        </Breakpoints.IsMobile>
      </Provider>
    )

    expect(wrapper.contains(OnlyVisibleOnMobile)).not.toBeTruthy()

    // Simulate mobile breakpoint
    wrapper.setState({
      isMobile: true,
      isTablet: false,
      isDesktop: false,
    })

    expect(wrapper.contains(OnlyVisibleOnMobile)).toBeTruthy()

    wrapper.unmount()
  })
})
