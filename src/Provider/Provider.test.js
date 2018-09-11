import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import Provider from '../Provider'

const breakpoints = {
  isMobile: `screen and (max-width: 500px)`,
  isTablet: `screen and (min-width: 500px) and (max-width: 1200px)`,
  isDesktop: `screen and (min-width: 1201px)`,
}

const matchMediaBreakpoints = {
  isMobile: window.matchMedia(`screen and (max-width: 500px)`),
  isTablet: window.matchMedia(`screen and (min-width: 500px) and (max-width: 1200px)`),
  isDesktop: window.matchMedia(`screen and (min-width: 1201px)`),
}

const stateMediaBreakpoints = {
  isMobile: false,
  isTablet: false,
  isDesktop: false,
}

describe('<Provider />', () => {
  it('renders without crashing', () => {
    shallow(
      <Provider breakpoints={breakpoints}>
        <div />
      </Provider>
    )
  })

  it('matches the snapshot', () => {
    const wrapper = shallow(
      <Provider breakpoints={breakpoints}>
        <div />
      </Provider>
    )
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('it passes breakpoints state to context provider', () => {
    const wrapper = shallow(
      <Provider breakpoints={breakpoints}>
        <div />
      </Provider>
    )

    expect(wrapper.instance().state).toEqual({ ...stateMediaBreakpoints })
    expect(wrapper.find('ContextProvider').prop('value')).toEqual({ ...stateMediaBreakpoints })
  })
})

describe('<Provider /> buildMatchMediaBreakpoints method', () => {
  it('returns object with matchMedia values for breakpoints when provided user breakpoints', () => {
    const wrapper = shallow(
      <Provider breakpoints={breakpoints}>
        <div />
      </Provider>
    )
    const returnObject = wrapper.instance().buildMatchMediaBreakpoints(breakpoints)
    const getMatchMediaObject = breakpointMedia => ({
      addListener: expect.any(Function),
      removeListener: expect.any(Function),
      media: breakpointMedia,
      matches: expect.any(Boolean),
    })

    const breakpointsKeys = Object.keys(breakpoints)

    expect(returnObject).toEqual({
      [breakpointsKeys[0]]: getMatchMediaObject(breakpoints[breakpointsKeys[0]]),
      [breakpointsKeys[1]]: getMatchMediaObject(breakpoints[breakpointsKeys[1]]),
      [breakpointsKeys[2]]: getMatchMediaObject(breakpoints[breakpointsKeys[2]]),
    })
  })
})

describe('<Provider /> buildBooleanBreakpoints method', () => {
  it('returns object with boolean values for breakpoints when provided matchMedia values', () => {
    const wrapper = shallow(
      <Provider breakpoints={breakpoints}>
        <div />
      </Provider>
    )
    const returnObject = wrapper.instance().buildBooleanBreakpoints(matchMediaBreakpoints)
    expect(returnObject).toEqual(stateMediaBreakpoints)
  })
})

describe('<Provider /> setActiveBreakpoint method', () => {
  it('set given breakpoint in state to true', () => {
    const wrapper = shallow(
      <Provider breakpoints={breakpoints}>
        <div />
      </Provider>
    )

    expect(wrapper.instance().state).toEqual({ ...stateMediaBreakpoints })

    wrapper.instance().setActiveBreakpoint('isMobile')

    expect(wrapper.instance().state).toEqual({ ...stateMediaBreakpoints, isMobile: true })
  })
})

describe('<Provider /> unsetActiveBreakpoint method', () => {
  it('set given breakpoint in state to false', () => {
    const wrapper = shallow(
      <Provider breakpoints={breakpoints}>
        <div />
      </Provider>
    )

    wrapper.setState({
      ...stateMediaBreakpoints,
      isMobile: true,
    })

    wrapper.instance().unsetActiveBreakpoint('isMobile')

    expect(wrapper.instance().state).toEqual({ ...stateMediaBreakpoints, isMobile: false })
  })
})
