import { normalizeBreakpointsConfig } from '../normalizeMediaQueryDict'

type ParseOptionsUtil = (options?: RmbOptions) => RmbParsedOptions | undefined

export const parseOptions: ParseOptionsUtil = options => {
  return options
    ? {
        ...options,
        ssr: options.ssr
          ? {
              rehydrate: true,
              ...options.ssr,
              config: normalizeBreakpointsConfig<boolean>(options.ssr.config),
            }
          : undefined,
      }
    : undefined
}
