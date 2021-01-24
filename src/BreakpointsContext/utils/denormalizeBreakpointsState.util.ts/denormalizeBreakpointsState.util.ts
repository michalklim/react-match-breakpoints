import { set } from '../../../common/set'
import { OverrideUserConfig, NormalizedConfig } from '../../../'

type DenormalizeBreakpointsStateUtil = (state: NormalizedConfig<boolean>) => OverrideUserConfig<boolean>
export const denormalizeBreakpointsState: DenormalizeBreakpointsStateUtil = state => {
  return Object.entries(state).reduce((acc, [key, value]) => {
    set(acc, key, value)
    return acc
  }, {})
}
