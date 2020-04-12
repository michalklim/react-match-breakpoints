import { createContext } from 'react'

export const BreakpointsContext = createContext<Rmb.NormalizedConfig>({})
export { generateInitialState } from './utils/generateInitialState'
export { denormalizeBreakpointsState } from './utils/denormalizeBreakpointsState.util.ts'
