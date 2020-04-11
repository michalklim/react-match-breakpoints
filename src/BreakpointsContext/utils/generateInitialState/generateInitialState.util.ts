type GenerateInitialStateUtil = (
  clientNormalizedBreakpointsConfig: RmbNormalizedBreakpointsConfig<string>,
  options?: RmbParsedOptions,
) => RmbBreakpointsState

export const generateInitialState: GenerateInitialStateUtil = (clientNormalizedBreakpointsConfig, options) => {
  if (!!options?.ssr?.config) {
    return options?.ssr?.config
  }
  const renderedJustOnClient = typeof options?.ssr === 'undefined'

  if (renderedJustOnClient) {
    return Object.entries(clientNormalizedBreakpointsConfig).reduce((acc, [key, value]) => {
      return {
        ...acc,
        [key]: matchMedia(value).matches,
      }
    }, {})
  }

  return {}
}
