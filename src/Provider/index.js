import React, { Component, Children } from 'react'
import warning from 'warning'

import Context from '../Context'

class Provider extends Component {
  state = {}
  constructor(props) {
    super(props)
    const { breakpoints: { queries } } = props

    if (queries) {
      const matchMediaBreakpoints = this.buildMatchMediaBreakpoints(queries)
      this.state = this.buildBooleanBreakpoints(matchMediaBreakpoints)
    } else if (process.env.NODE_ENV !== 'production') {
      warning(
        false,
        "[React Match Breakpoints] It seems that you didn't provide valid breakpoints object to the provider"
      )
    }
  }

  buildBooleanBreakpoints = matchMediaBreakpoints => {
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
    return (
      <Context.Provider value={this.state}>{Children.only(this.props.children)}</Context.Provider>
    )
  }
}

export default Provider
