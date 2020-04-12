import { normalizeBreakpointsConfig } from '../normalizeMediaQueryDict'

type ParseOptionsUtil = (options?: Rmb.Options) => Rmb.ParsedOptions | undefined

export const parseOptions: ParseOptionsUtil = options => {
  return options
    ? {
        ...options,
        ssr: options.ssr
          ? {
              rehydrate: true,
              ...options.ssr,
              config: normalizeBreakpointsConfig(options.ssr.config),
            }
          : undefined,
      }
    : undefined
}
