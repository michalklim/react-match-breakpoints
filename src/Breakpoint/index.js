import React, { Fragment, Component } from 'react'
import get from 'lodash/get'

import withBreakpoints from '../withBreakpoints'

const PassThrough = ({ children }) => children

class Breakpoint extends Component {
  state = {
    key: 'breakpoint',
  }

  componentDidMount() {
    const { serverConfig, breakpointsPath, breakpoints } = this.props

    if (get(serverConfig, breakpointsPath) !== get(breakpoints, breakpointsPath)) {
      this.setState({
        key: 'not-guessed-breakpoint',
      })
    }
  }

  render() {
    const { breakpointsPath, breakpoints, children } = this.props

    return breakpoints && get(breakpoints, breakpointsPath) ? (
      <PassThrough key={this.state.key}>{children}</PassThrough>
    ) : (
      <Fragment />
    )
  }
}

export default withBreakpoints(Breakpoint)
