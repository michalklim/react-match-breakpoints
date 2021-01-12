import { isPlainObject } from '../../../common/isPlainObject'
import { Config, NormalizedConfig } from '../../../types'

export const normalizeConfig = <T extends string | boolean>(breakpointsConfig: Config<T>): NormalizedConfig<T> => {
  const normalizeRecursively = (
    breakpointsConfigPart: typeof breakpointsConfig | object,
    parentKeys: string[] = [],
  ): NormalizedConfig<T> => {
    return Object.entries(breakpointsConfigPart).reduce<NormalizedConfig<T>>((acc, [key, value]) => {
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
