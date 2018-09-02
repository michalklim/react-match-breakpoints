import React from 'react'
import PropTypes from 'prop-types'

import Context from '../Context'
import { capitalizeFirstLetter } from '../utils'

const Breakpoints = () => {
    return (
        <Context.Consumer>
            {
                (breakpoints, componentRenameFn) => ({
                    ...Object.keys(breakpoints).reduce(
                        (parentComponent, breakpoint) => {
                            const componentName = componentRenameFn
                                ? componentRenameFn(breakpoint)
                                : capitalizeFirstLetter(breakpoint)
                            parentComponent[componentName] = ({children}) => breakpoints[breakpoint] && children
                            parentComponent[componentName].displayName = `Breakpoints.${componentName}`
                            return parentComponent
                        },
                        {}
                    )
                })
            }
        </Context.Consumer>
    )
}

const breakpointsPropTypes = {
    children: PropTypes.node,
}

Object.keys(Breakpoints).forEach(item => {
    Breakpoints[item].propTypes = breakpointsPropTypes
})

export default Breakpoints