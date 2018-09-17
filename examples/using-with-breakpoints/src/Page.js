import React, { Component } from 'react'
import { withBreakpoints } from 'react-match-breakpoints'

import './Page.css'

class Page extends Component {
  getCurrentBreakpointName = () => Object.keys(this.props.breakpoints).find(key => this.props.breakpoints[key])

  getCurrentBreakpointEmoji = breakpointName => {
    switch (breakpointName) {
      case 'mobile':
        return '📱'
      case 'tablet':
        return '📱📱 📱📱'
      case 'desktop':
        return '💻'
      case 'bigDesktop':
        return '🖥️'
    }
  }

  render() {
    const breakpointName = this.getCurrentBreakpointName()

    return (
      <div className="container">
        <h3>{`Current breakpoint name is ${breakpointName} ${this.getCurrentBreakpointEmoji(breakpointName)}`}</h3>
      </div>
    )
  }
}

export default withBreakpoints(Page)
