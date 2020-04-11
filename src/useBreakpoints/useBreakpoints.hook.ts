import { useContext, useMemo } from 'react'

import { BreakpointsContext, denormalizeBreakpointsState } from '../BreakpointsContext'

export const useBreakpoints = () => {
  const state = useContext<RmbBreakpointsState>(BreakpointsContext)
  return useMemo(() => denormalizeBreakpointsState(state), [state])
}
