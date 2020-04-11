import { createContext } from 'react'

export const BreakpointsContext = createContext<RmbBreakpointsState>({})
export { generateInitialState } from './utils/generateInitialState'
export { denormalizeBreakpointsState } from './utils/denormalizeBreakpointsState.util.ts'
