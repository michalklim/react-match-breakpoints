import { set } from '../../../utils/set'

type DenormalizeBreakpointsStateUtil = (state: RmbBreakpointsState) => DenormalizedBreakpointsState<RmbBreakpointsState>
export const denormalizeBreakpointsState: DenormalizeBreakpointsStateUtil = state => {
  return Object.entries(state).reduce((acc, [key, value]) => {
    set(acc, key, value)
    return acc
  }, {})
}
