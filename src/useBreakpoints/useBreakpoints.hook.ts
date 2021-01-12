import { useContext, useMemo } from 'react'

import { BreakpointsContext, denormalizeBreakpointsState } from '../BreakpointsContext'
import { NormalizedConfig } from '../types'

export const useBreakpoints = () => {
  const state = useContext<NormalizedConfig>(BreakpointsContext)
  return useMemo(() => denormalizeBreakpointsState(state), [state])
}
