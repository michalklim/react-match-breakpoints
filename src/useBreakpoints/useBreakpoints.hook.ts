import { useContext, useMemo } from 'react'

import { BreakpointsContext, denormalizeBreakpointsState } from 'BreakpointsContext/index'

export const useBreakpoints = () => {
  const state = useContext<Rmb.NormalizedConfig>(BreakpointsContext)
  return useMemo(() => denormalizeBreakpointsState(state), [state])
}
