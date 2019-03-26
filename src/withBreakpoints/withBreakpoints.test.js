import React from 'react'
import { shallow, mount } from 'enzyme'
import toJson from 'enzyme-to-json'

const mediaQueries = {
  isMobile: 'screen and (max-width: 500px)',
  isTablet: 'screen and (min-width: 500px) and (max-width: 1200px)',
  isDesktop: 'screen and (min-width: 1201px)',
}

const stateMediaBreakpoints = {
  isMobile: false,
  isTablet: false,
  isDesktop: false,
}

let createBreakpoints
let Provider
let withBreakpoints

beforeEach(() => {
  jest.resetModules()

  createBreakpoints = require('../createBreakpoints')
  Provider = require('../Provider')
  withBreakpoints = require('../withBreakpoints')
})

const generateDummyComponent = () => {
  return ({ children }) => <div>{children}</div>
}

describe('@withBreakpoints', () => {
  it('renders without crashing', () => {
    const breakpoints = createBreakpoints(mediaQueries)
    const WrappedComponent = withBreakpoints(generateDummyComponent())
    shallow(
      <Provider breakpoints={breakpoints}>
        <WrappedComponent />
      </Provider>
    )
  })

  it('matches the snapshot', () => {
    const WrappedComponent = withBreakpoints(generateDummyComponent())
    const wrapper = shallow(<WrappedComponent />)

    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('should pass breakpoints state down to wrapped component', () => {
    const breakpoints = createBreakpoints(mediaQueries, null, stateMediaBreakpoints)
    const Component = generateDummyComponent()
    const WrappedComponent = withBreakpoints(Component)
    const wrapper = mount(
      <Provider breakpoints={breakpoints}>
        <WrappedComponent />
      </Provider>
    )

    expect(wrapper.find(Component).props().breakpoints).toEqual({ ...stateMediaBreakpoints })

    wrapper.unmount()
  })

  it('should allow other props to pass through', () => {
    const breakpoints = createBreakpoints(mediaQueries)
    const Component = generateDummyComponent()
    const WrappedComponent = withBreakpoints(Component)
    const wrapper = mount(
      <Provider breakpoints={breakpoints}>
        <WrappedComponent className="test" />
      </Provider>
    )

    expect(wrapper.find(Component).props()).toHaveProperty('className', 'test')

    wrapper.unmount()
  })

  it('should have informational display name', () => {
    const breakpoints = createBreakpoints(mediaQueries)
    const Component = generateDummyComponent()
    Component.displayName = 'TestComponent'
    const WrappedComponent = withBreakpoints(Component)
    const wrapper = mount(
      <Provider breakpoints={breakpoints}>
        <WrappedComponent className="test" />
      </Provider>
    )

    expect(wrapper.find(WrappedComponent).name()).toEqual('withBreakpoints(TestComponent)')

    wrapper.unmount()
  })
})
