type GenerateInitialStateUtil = (
  clientNormalizedBreakpointsConfig: Rmb.NormalizedConfig<string>,
  options?: Rmb.ParsedOptions,
) => Rmb.NormalizedConfig

export const generateInitialState: GenerateInitialStateUtil = (clientNormalizedBreakpointsConfig, options) => {
  if (!!options?.ssr?.config) {
    return options?.ssr?.config
  }
  const renderedJustOnClient = typeof options?.ssr === 'undefined'

  if (renderedJustOnClient && typeof window?.matchMedia !== 'undefined') {
    return Object.entries(clientNormalizedBreakpointsConfig).reduce((acc, [key, value]) => {
      return {
        ...acc,
        [key]: window.matchMedia(value).matches,
      }
    }, {})
  }

  return {}
}
