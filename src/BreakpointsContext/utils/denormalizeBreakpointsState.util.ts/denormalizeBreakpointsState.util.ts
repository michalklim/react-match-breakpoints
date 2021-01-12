import { set } from '../../../common/set'
import { Breakpoints, NormalizedConfig } from '../../../types'

type DenormalizeBreakpointsStateUtil = (state: NormalizedConfig) => Breakpoints
export const denormalizeBreakpointsState: DenormalizeBreakpointsStateUtil = state => {
  return Object.entries(state).reduce((acc, [key, value]) => {
    set(acc, key, value)
    return acc
  }, {})
}
