import { useContext } from 'react'

import { BreakpointsContext, denormalizeBreakpointsState } from '../BreakpointsContext'

export const useBreakpoints = () => {
  const state = useContext<BreakpointsState>(BreakpointsContext)

  return denormalizeBreakpointsState(state)
}
