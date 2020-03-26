import React, { FunctionComponent, ReactNode } from 'react'
import * as RMB from 'react-match-breakpoints'

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

const { initMatchBreakpoints, useBreakpoints } = (RMB as unknown) as RMB.TypedBreakpoints<typeof breakpointsConfig>

const StoryContent: FunctionComponent = () => {
  const breakpoints = useBreakpoints()
  console.log(breakpoints)
  return <div>test</div>
}

export const UseBreakpoints = (): ReactNode => {
  const BreakpointsProvider = initMatchBreakpoints(breakpointsConfig)

  return (
    <BreakpointsProvider>
      <StoryContent />
    </BreakpointsProvider>
  )
}

UseBreakpoints.story = {
  name: 'useBreakpoints',
}
