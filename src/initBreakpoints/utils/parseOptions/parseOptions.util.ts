import { Options, ParsedOptions } from '../../../'
import { normalizeConfig } from '../normalizeConfig'

type ParseOptionsUtil = (options?: Options) => ParsedOptions | undefined

export const parseOptions: ParseOptionsUtil = options => {
  return options
    ? {
        breakpointCSSClass: false,
        ...options,
        ssr: options.ssr
          ? {
              rehydrate: false,
              ...options.ssr,
              config: normalizeConfig(options.ssr.config),
            }
          : undefined,
      }
    : undefined
}
