import { set } from 'common/set'

type DenormalizeBreakpointsStateUtil = (state: Rmb.NormalizedConfig) => Rmb.Breakpoints
export const denormalizeBreakpointsState: DenormalizeBreakpointsStateUtil = state => {
  return Object.entries(state).reduce((acc, [key, value]) => {
    set(acc, key, value)
    return acc
  }, {})
}
