import { get } from '../../../common/get'
import { BreakpointComponent } from '../../../'

export const proxifyBreakpoint = (obj: BreakpointComponent): BreakpointComponent =>
  new Proxy(obj, {
    get: (target, propKey) => {
      const isMissingComponent =
        !(propKey in target) && propKey !== '__esModule' && process.env.NODE_ENV !== 'production'

      if (isMissingComponent) {
        console.warn(
          `[RMB] You are trying to use component(${String(propKey)}).
          That name doesn't match any breakpoint you have provided.
          Current breakpoints components names are: ${Object.keys(target).join(', ')}`,
        )
      }

      return !isMissingComponent ? get(target, `${String(propKey)}`) : () => null
    },
  })
