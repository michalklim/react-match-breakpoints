import React, { Component, Children } from 'react'
import PropTypes from 'prop-types'
import warning from 'warning'

import Context from '../Context'
import breakpointsStoreInstance from '../Breakpoints'

class Provider extends Component {
  state = {
    breakpoints: {},
  }
  constructor(props) {
    super(props)
    const { breakpoints, componentRenameFn } = props

    if (!!breakpoints) {
      const matchMediaBreakpoints = this.buildMatchMediaBreakpoints(breakpoints)
      const stateBreakpoints = this.buildBooleanBreakpointsState(matchMediaBreakpoints)

      breakpointsStoreInstance.buildBreakpointsComponents(stateBreakpoints, componentRenameFn)

      this.state = stateBreakpoints
    } else if (process.env.NODE_ENV !== 'production') {
      warning(
        !!breakpoints,
        "[React Match Breakpoints] It seems that you didn't provide valid breakpoints object to the provider"
      )
    }
  }

  buildBooleanBreakpointsState = matchMediaBreakpoints => {
    return Object.keys(matchMediaBreakpoints).reduce((acc, breakpoint) => {
      acc[breakpoint] = matchMediaBreakpoints[breakpoint].matches
      return acc
    }, {})
  }

  buildMatchMediaBreakpoints = breakpoints => {
    return Object.keys(breakpoints).reduce((acc, breakpoint) => {
      acc[breakpoint] = window.matchMedia(breakpoints[breakpoint])
      acc[breakpoint].addListener(mq => {
        mq.matches ? this.setActiveBreakpoint(breakpoint) : this.unsetActiveBreakpoint(breakpoint)
      })
      return acc
    }, {})
  }

  setActiveBreakpoint = breakpoint => {
    this.setState({
      [breakpoint]: true,
    })
  }

  unsetActiveBreakpoint = breakpoint => {
    this.setState({
      [breakpoint]: false,
    })
  }

  render() {
    return <Context.Provider value={this.state}>{Children.only(this.props.children)}</Context.Provider>
  }
}

Provider.propTypes = {
  breakpoints: PropTypes.object.isRequired,
}

export default Provider
