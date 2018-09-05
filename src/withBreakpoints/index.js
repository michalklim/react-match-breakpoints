import React, { Component } from 'react'

import Context from '../Context'

const withBreakpoints = ChildComponent => {
  class WithBreakpoints extends Component {
    render() {
      return (
        <Context.Consumer>
          {breakpoints => <ChildComponent {...this.props} breakpoints={breakpoints} />}
        </Context.Consumer>
      )
    }
  }

  const getDisplayName = WrappedComponent => WrappedComponent.displayName || WrappedComponent.name || 'Component'

  WithBreakpoints.displayName = `withBreakpoints(${getDisplayName(ChildComponent)})`

  return WithBreakpoints
}

export default withBreakpoints
