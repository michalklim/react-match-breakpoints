import { createContext } from 'react'
import { NormalizedConfig } from '../'

export const BreakpointsContext = createContext<NormalizedConfig<boolean>>({})
export { generateInitialState } from './utils/generateInitialState'
export { denormalizeBreakpointsState } from './utils/denormalizeBreakpointsState.util.ts'
