import { get } from '../../../common/get'
import { BreakpointComponent, ParsedOptions } from '../../../'

export const proxifyBreakpoint = (obj: BreakpointComponent, options: ParsedOptions): BreakpointComponent =>
  new Proxy(obj, {
    get: (target, propKey) => {
      const isMissingComponent = !(propKey in target) && propKey !== '__esModule'

      if (isMissingComponent && options.log) {
        console.warn(
          `[RMB] You are trying to use Breakpoint.(${String(propKey)}).
          That name doesn't match any breakpoint you have provided.
          Current breakpoints components names are: ${Object.keys(target).join(', ')}`,
        )
      }

      return !isMissingComponent ? get(target, `${String(propKey)}`) : () => null
    },
  })
