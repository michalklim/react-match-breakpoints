import { isPlainObject } from 'common/isPlainObject'

export const normalizeBreakpointsConfig = <T extends boolean | string>(
  breakpointsConfig: Rmb.Config | Rmb.ServerConfig,
): Rmb.NormalizedConfig<T> => {
  const normalizeRecursively = (
    breakpointsConfigPart: typeof breakpointsConfig | object,
    parentKeys: string[] = [],
  ): Rmb.NormalizedConfig<T> => {
    return Object.entries(breakpointsConfigPart).reduce<Rmb.NormalizedConfig<T>>((acc, [key, value]) => {
      if (isPlainObject(value)) {
        return {
          ...acc,
          ...normalizeRecursively(value, [...parentKeys, key]),
        }
      }

      return {
        ...acc,
        [[...parentKeys, key].join('.')]: value,
      }
    }, {})
  }

  return normalizeRecursively(breakpointsConfig)
}
