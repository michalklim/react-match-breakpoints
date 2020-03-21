import { useContext } from 'react'

import { Context } from '../Context'

export const useBreakpoints = () => {
  return useContext<BreakpointsState>(Context)
}
