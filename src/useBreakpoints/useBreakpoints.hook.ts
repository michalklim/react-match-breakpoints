import { useContext } from 'react'

import { BreakpointsContext } from '../BreakpointsContext'

export const useBreakpoints = () => {
  return useContext<BreakpointsState>(BreakpointsContext)
}
