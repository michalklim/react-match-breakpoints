import React from 'react'
import { Welcome } from '@storybook/react/demo'
import Breakpoint, { initMatchBreakpoints } from 'react-match-breakpoints'

const breakpointsConfig = {
  tablet: 'screen and (min-width: 768px)',
  desktop: 'screen and (min-width: 1024px)',
}

const BreakpointsProvider = initMatchBreakpoints(breakpointsConfig)

export default {
  title: 'Welcome',
  component: Welcome,
}

export const ToStorybook = () => {
  return (
    <BreakpointsProvider>
      <Breakpoint.tablet>
        <div>💻</div>
      </Breakpoint.tablet>
      <Breakpoint.desktop>
        <div>🖥️</div>
      </Breakpoint.desktop>
    </BreakpointsProvider>
  )
}

ToStorybook.story = {
  name: 'to Storybook',
}
