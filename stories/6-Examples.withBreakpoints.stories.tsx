import React, { FunctionComponent, ReactNode } from 'react'
import * as RMB from 'react-match-breakpoints'
import { InjectedBreakpointsProps } from 'react-match-breakpoints'

export default {
  title: 'Examples',
}

const breakpointsConfig = {
  tablet: 'screen and (min-width: 768px)',
  desktop: {
    small: 'screen and (min-width: 1024px)',
    big: 'screen and (min-width: 1440px)',
  },
}

const { initMatchBreakpoints, withBreakpoints } = (RMB as unknown) as RMB.TypedBreakpoints<typeof breakpointsConfig>

const StoryContent: FunctionComponent<InjectedBreakpointsProps<typeof breakpointsConfig>> = ({ breakpoints }) => {
  console.log(breakpoints)
  return <div>test</div>
}

export const WithBreakpoints = (): ReactNode => {
  const BreakpointsProvider = initMatchBreakpoints(breakpointsConfig)
  const EnhancedStoryContent = withBreakpoints(StoryContent)
  return (
    <BreakpointsProvider>
      <EnhancedStoryContent />
    </BreakpointsProvider>
  )
}

WithBreakpoints.story = {
  name: 'withBreakpoints',
}
