import React from 'react'
import PropTypes from 'prop-types'

import withBreakpoints from '../withBreakpoints'
import { matchMediaBreakpoints } from '../Provider'
import { capitalizeFirstLetter } from '../utils'

const Breakpoints = Object.keys(matchMediaBreakpoints).reduce(
    (parentComponent, breakpoint) => {
        const componentName = capitalizeFirstLetter(breakpoint)
        parentComponent[componentName] = withBreakpoints(
            props => props.breakpoints[breakpoint] && props.children
        )
        parentComponent[componentName].displayName = componentName
        return parentComponent
    },
    {}
)

const breakpointsPropTypes = {
    children: PropTypes.node,
    ...Object.keys(matchMediaBreakpoints).reduce((acc, val) => {
        acc[val] = PropTypes.bool
        return acc
    }, {})
}

Object.keys(Breakpoints).forEach(item => {
    Breakpoints[item].propTypes = breakpointsPropTypes
})

export default Breakpoints