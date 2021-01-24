import { isPlainObject } from '../../../common/isPlainObject'
import { AllowedConfigValues, Config, NormalizedConfig } from '../../../'

export const normalizeConfig = <ValueType extends AllowedConfigValues>(
  config: Config<ValueType>,
): NormalizedConfig<ValueType> => {
  const normalizeRecursively = (
    breakpointsConfigPart: Config<ValueType>,
    parentKeys: string[] = [],
  ): NormalizedConfig<ValueType> => {
    return Object.entries(breakpointsConfigPart).reduce<NormalizedConfig<ValueType>>((acc, [key, value]) => {
      if (isPlainObject<Config<ValueType>>(value)) {
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
