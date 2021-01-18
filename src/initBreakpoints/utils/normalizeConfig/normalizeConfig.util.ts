import { isPlainObject } from '../../../common/isPlainObject'
import { Config, NormalizedConfig } from '../../../'

export const normalizeConfig = (config: Config): NormalizedConfig => {
  const normalizeRecursively = (breakpointsConfigPart: Config, parentKeys: string[] = []): NormalizedConfig => {
    return Object.entries(breakpointsConfigPart).reduce<NormalizedConfig>((acc, [key, value]) => {
      if (isPlainObject<Config>(value)) {
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

  return normalizeRecursively(config)
}
