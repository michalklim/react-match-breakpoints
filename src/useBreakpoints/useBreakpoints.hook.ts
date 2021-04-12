import { useContext, useMemo } from 'react'

import { BreakpointsContext, denormalizeBreakpointsState } from '../BreakpointsContext'
import { NormalizedConfig, OverrideUserConfig } from '../'

export const useBreakpoints = () => {
  const state = useContext<NormalizedConfig<boolean>>(BreakpointsContext)
  return useMemo<OverrideUserConfig<boolean>>(() => denormalizeBreakpointsState(state), [state])
}
