import { Options, ParsedOptions } from '../../../'
import { normalizeConfig } from '../normalizeConfig'

type ParseOptionsUtil = (options?: Options) => ParsedOptions

const defaultOptions: ParsedOptions = {
  breakpointCSSClass: false,
  log: process.env.NODE_ENV !== 'production',
  isServer: typeof window === 'undefined',
  ssr: {
    rehydrate: true,
    config: null,
  },
}

export const parseOptions: ParseOptionsUtil = options => {
  if (options) {
    const { ssr, ...restOfOptions } = options

    return {
      ...defaultOptions,
      ...restOfOptions,
      ...(ssr && {
        ssr: {
          ...defaultOptions.ssr,
          ...ssr,
          config: normalizeConfig(ssr.config),
        },
      }),
    }
  }

  return defaultOptions
}
