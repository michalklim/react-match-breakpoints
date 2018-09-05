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

beforeEach(() => {
  jest.resetModules()
})

describe('<Provider />', () => {
  it('should render Provider', () => {
    shallow(
      <Provider breakpoints={breakpoints}>
        <div>test</div>
      </Provider>
    )
  })

  it('matches the snapshot', () => {
    const wrapper = shallow(
      <Provider breakpoints={breakpoints}>
        <div>test</div>
      </Provider>
    )
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})

describe('<Provider /> buildBooleanBreakpoints method', () => {
  it('should return object with boolean values for breakpoints when provided mq values', () => {
    const wrapper = shallow(
      <Provider breakpoints={breakpoints}>
        <div>test</div>
      </Provider>
    )
    const returnObject = wrapper.instance().buildBooleanBreakpoints(matchMediaBreakpoints)
    expect(returnObject).toEqual(stateMediaBreakpoints)
  })
})
