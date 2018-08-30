import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Context from '../Context'

class Provider extends Component {
    matchMediaBreakpoints = {}

    constructor (props) {
        super(props)

        this.matchMediaBreakpoints = props.breakpoints

        this.setInitialBreakpoints()
        this.addBreakpointsListeners()
    }

    setInitialBreakpoints = () => {
        this.setState({
            ...Object.keys(this.matchMediaBreakpoints).reduce((acc, breakpoint) => {
                acc[breakpoint] = this.matchMediaBreakpoints[breakpoint].matches
                return acc
            }, {})
        })
    }

    addBreakpointsListeners = () => {
        Object.keys(this.matchMediaBreakpoints).forEach(breakpoint => {
            this.matchMediaBreakpoints[breakpoint].addListener(mq => {
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