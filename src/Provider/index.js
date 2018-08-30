import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Context from '../Context'

export let matchMediaBreakpoints = {}

class Provider extends Component {
    state = {}
    constructor (props) {
        super(props)

        matchMediaBreakpoints = props.breakpoints

        this.setInitialBreakpoints()
        this.addBreakpointsListeners()
    }

    setInitialBreakpoints = () => {
        this.setState({
            ...Object.keys(matchMediaBreakpoints).reduce((acc, breakpoint) => {
                acc[breakpoint] = matchMediaBreakpoints[breakpoint].matches
                return acc
            }, {})
        })
    }

    addBreakpointsListeners = () => {
        Object.keys(matchMediaBreakpoints).forEach(breakpoint => {
            matchMediaBreakpoints[breakpoint].addListener(mq => {
                mq.matches ? this.setActiveBreakpoint(breakpoint) : this.unsetActiveBreakpoint(breakpoint)
            })
        })
    }

    setActiveBreakpoint = breakpoint => {
        this.setState({
            [breakpoint]: true
        })
    }

    unsetActiveBreakpoint = breakpoint => {
        this.setState({
            [breakpoint]: false
        })
    }

    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

Provider.propTypes = {
    breakpoints: PropTypes.object.isRequired,
}

export default Provider