import React, { FunctionComponent, ReactNode } from 'react'
import { InjectedBreakpointsProps, initBreakpoints, withBreakpoints } from '../dist'

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

type BreakpointsConfig = typeof breakpointsConfig

declare module '../dist' {
  interface Config extends BreakpointsConfig {} // eslint-disable-line @typescript-eslint/no-empty-interface
}

const StoryContent: FunctionComponent<InjectedBreakpointsProps> = ({ breakpoints }) => {
  console.log(breakpoints)
  return <div>test</div>
}

export const WithBreakpoints = (): ReactNode => {
  const BreakpointsProvider = initBreakpoints(breakpointsConfig)
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
