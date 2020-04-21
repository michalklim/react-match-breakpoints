import { normalizeConfig } from '../normalizeConfig'

type ParseOptionsUtil = (options?: Rmb.Options) => Rmb.ParsedOptions | undefined

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
