import React from 'react'
import { shallow, mount } from 'enzyme'
import toJson from 'enzyme-to-json'

import withBreakpoints from '../withBreakpoints'
import Provider from '../Provider'

const breakpoints = {
  isMobile: `screen and (max-width: 500px)`,
  isTablet: `screen and (min-width: 500px) and (max-width: 1200px)`,
  isDesktop: `screen and (min-width: 1201px)`,
}

const stateMediaBreakpoints = {
  isMobile: false,
  isTablet: false,
  isDesktop: false,
}

beforeEach(() => {
  jest.resetModules()
})

const generateDummyComponent = () => {
  return ({ children }) => <div>{children}</div>
}

describe('@withBreakpoints', () => {
  it('renders without crashing', () => {
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
