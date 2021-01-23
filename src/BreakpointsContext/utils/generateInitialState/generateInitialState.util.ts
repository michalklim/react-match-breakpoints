import { NormalizedConfig, ParsedOptions } from '../../../'

type GenerateInitialStateUtil = (
  clientNormalizedBreakpointsConfig: NormalizedConfig,
  options: ParsedOptions,
) => NormalizedConfig

export const generateInitialState: GenerateInitialStateUtil = (clientNormalizedBreakpointsConfig, options) => {
  if (options.ssr.config) {
    return options.ssr.config
  }

  const renderedJustOnClient = !options.ssr.config && !options.isServer

  if (renderedJustOnClient) {
    return Object.entries(clientNormalizedBreakpointsConfig).reduce((acc, [key, value]) => {
      return {
        ...acc,
        [key]: window.matchMedia(value as string).matches,
      }
    }, {})
  }

  return {}
}
