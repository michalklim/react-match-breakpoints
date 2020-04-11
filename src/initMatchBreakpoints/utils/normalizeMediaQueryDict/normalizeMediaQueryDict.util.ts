import { isPlainObject } from '../../../utils/isPlainObject'

type ReturnType<T extends boolean | string> = T extends string
  ? RmbNormalizedBreakpointsConfig<string>
  : T extends boolean
  ? RmbNormalizedBreakpointsConfig<boolean>
  : never
//type NormalizeMediaQueryDictUtil = <T extends RmbBaseBreakpointsConfig<string> | RmbBaseBreakpointsConfig<boolean>>(breakpointsConfig: T) => ReturnType<T>
// type NormalizeRecursively = <T extends RmbBaseBreakpointsConfig<string> | RmbBaseBreakpointsConfig<boolean>>(breakpointsConfigPart: T, parentKeys?: string[]) => ReturnType<T>

export const normalizeBreakpointsConfig = <T extends boolean | string>(
  breakpointsConfig: RmbConfig<T>,
): ReturnType<T> => {
  const normalizeRecursively = (breakpointsConfigPart: RmbConfig<T>, parentKeys: string[] = []): ReturnType<T> => {
    return Object.entries(breakpointsConfigPart).reduce<ReturnType<T>>((acc, [key, value]) => {
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
