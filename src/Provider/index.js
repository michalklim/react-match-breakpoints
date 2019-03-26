import React, { Component, Children } from 'react'
import warning from 'warning'
import set from 'lodash/set'

import Context from '../Context'
import { isObject, isServer } from '../utils/'

class Provider extends Component {
  state = {}
  constructor(props) {
    super(props)
    const { breakpoints: { queries, serverQueries } } = props

    if (queries) {
      if (isServer && serverQueries) {
        this.state = serverQueries
      } else if (isServer && !serverQueries) {
        warning(
          false,
          "[React Match Breakpoints] It seems that you try to use RMB on server environment but you didn't provide server breakpoints"
        )
      } else {
        const matchMediaBreakpoints = this.buildMatchMediaBreakpoints(queries)
        this.state = this.buildBooleanBreakpoints(matchMediaBreakpoints)
      }
    } else if (process.env.NODE_ENV !== 'production') {
      warning(
        false,
        "[React Match Breakpoints] It seems that you didn't provide valid breakpoints object to the provider"
      )
    }
  }

  buildBooleanBreakpoints = obj => {
    return Object.keys(obj).reduce((acc, key) => {
      if (obj[key].matches === undefined) {
        return {
          ...acc,
          [key]: this.buildBooleanBreakpoints(obj[key]),
        }
      } else {
        return {
          ...acc,
          [key]: obj[key].matches,
        }
      }
    }, {})
  }

  buildMatchMediaBreakpoints = (breakpoints, parent) => {
    return Object.keys(breakpoints).reduce((acc, breakpoint) => {
      const breakpointQuery = breakpoints[breakpoint]
      const breakpointStatePath = parent ? [...parent, breakpoint] : [breakpoint]

      if (isObject(breakpointQuery)) {
        return {
          ...acc,
          [breakpoint]: this.buildMatchMediaBreakpoints(breakpointQuery, breakpointStatePath),
        }
      } else {
        const matchMedia = window.matchMedia(breakpointQuery)

        matchMedia.addListener(mq => {
          mq.matches
            ? this.setBreakpointState(breakpointStatePath, true)
            : this.setBreakpointState(breakpointStatePath, false)
        })

        return {
          ...acc,
          [breakpoint]: matchMedia,
        }
      }
    }, {})
  }

  setBreakpointState = (path, state) => {
    this.setState(prevState => set(prevState, path.join('.'), state))
  }

  render() {
    return (
      <Context.Provider value={this.state}>{Children.only(this.props.children)}</Context.Provider>
    )
  }
}

export default Provider
