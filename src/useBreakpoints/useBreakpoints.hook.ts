import { useContext, useMemo } from 'react'

import { BreakpointsContext, denormalizeBreakpointsState } from '../BreakpointsContext'
import { NormalizedConfig } from '../'

export const useBreakpoints = () => {
  const state = useContext<NormalizedConfig<boolean>>(BreakpointsContext)
  return useMemo(() => denormalizeBreakpointsState(state), [state])
}
