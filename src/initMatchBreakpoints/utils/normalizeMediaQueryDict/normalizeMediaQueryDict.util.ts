import { isPlainObject } from '../../../utils/isPlainObject'

export const normalizeBreakpointsConfig = <T extends boolean | string>(
  breakpointsConfig: Rmb.Config<T>,
): Rmb.NormalizedConfig<T> => {
  const normalizeRecursively = (
    breakpointsConfigPart: Rmb.Config<T>,
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
