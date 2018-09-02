import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Context from '../Context'

export let matchMediaBreakpoints = {}

class Provider extends Component {
    state = {
        breakpoints: {},
        componentRenameFn: undefined
    }
    constructor (props) {
        super(props)
        const { breakpoints, componentRenameFn } = props

        matchMediaBreakpoints = this.buildMatchMediaBreakpoints(breakpoints, componentRenameFn)

        this.state = {
            ...Object.keys(matchMediaBreakpoints).reduce((acc, breakpoint) => {
                acc[breakpoint] = matchMediaBreakpoints[breakpoint].matches
                return acc
            }, {}),
        }
    }ś

    buildMatchMediaBreakpoints = () => {

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