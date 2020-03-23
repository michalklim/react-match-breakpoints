import set from 'lodash/set'

export const denormalizeBreakpointsState = (
  state: BreakpointsState,
): DenormalizedBreakpointsState<BreakpointsState> => {
  return Object.entries(state).reduce((acc, [key, value]) => {
    set(acc, key, value)
    return acc
  }, {})
}
