import { useContext, useMemo } from 'react'

import { BreakpointsContext, denormalizeBreakpointsState } from '../BreakpointsContext'
import { NormalizedConfig, OverrideUserConfig } from '../'

export const useBreakpoints = (): OverrideUserConfig<boolean> => {
  const state = useContext<NormalizedConfig<boolean>>(BreakpointsContext)
  return useMemo(() => denormalizeBreakpointsState(state), [state])
}
