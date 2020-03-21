type GenerateInitialStateUtil = (normalizedMediaQueryDict: NormalizedMediaQueryDict) => BreakpointsState

export const generateInitialState: GenerateInitialStateUtil = normalizedMediaQueryDict => {
  return Object.entries(normalizedMediaQueryDict).reduce((acc, [key, value]) => {
    return {
      ...acc,
      [key]: typeof value === 'boolean' ? value : value.matches,
    }
  }, {})
}
