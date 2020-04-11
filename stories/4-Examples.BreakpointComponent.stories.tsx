import React, { ReactNode } from 'react'
import * as RMB from 'react-match-breakpoints'

export default {
  title: 'Examples',
}

const breakpointsConfig = {
  mobile: 'screen and (min-width: 340px)',
  tablet: 'screen and (min-width: 768px)',
  desktop: {
    small: 'screen and (min-width: 1024px)',
    big: 'screen and (min-width: 1440px)',
  },
}

const { default: Breakpoint, initMatchBreakpoints } = (RMB as unknown) as RMB.TypedBreakpoints<typeof breakpointsConfig>

export const BreakpointComponent = (): ReactNode => {
  const BreakpointsProvider = initMatchBreakpoints(breakpointsConfig)

  return (
    <BreakpointsProvider>
      <Breakpoint.mobile>
        <div className="test">mobile</div>
      </Breakpoint.mobile>
      <Breakpoint.tablet>
        <div className="test test1">tablet</div>
      </Breakpoint.tablet>
      <Breakpoint.desktop.small>
        <div className="test test1">desktop small</div>
      </Breakpoint.desktop.small>
      <Breakpoint.desktop.big>
        <div className="test test1">desktop big</div>
      </Breakpoint.desktop.big>
    </BreakpointsProvider>
  )
}

BreakpointComponent.story = {
  parameters: {
    docs: {
      disable: true,
    },
  },
}
