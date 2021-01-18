import { set } from '../../../common/set'
import { OverrideDefaultConfig, NormalizedConfig } from '../../../'

type DenormalizeBreakpointsStateUtil = (state: NormalizedConfig) => OverrideDefaultConfig<boolean>
export const denormalizeBreakpointsState: DenormalizeBreakpointsStateUtil = state => {
  return Object.entries(state).reduce((acc, [key, value]) => {
    set(acc, key, value)
    return acc
  }, {})
}
