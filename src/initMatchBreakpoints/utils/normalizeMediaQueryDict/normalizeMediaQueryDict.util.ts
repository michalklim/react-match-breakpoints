import isPlainObject from 'lodash/isObject'

type NormalizeMediaQueryDictUtil = (mediaQueriesDict: MediaQueryDict) => NormalizedMediaQueryDict
type NormalizeRecursively = (mediaQueriesDict: MediaQueryDict, parentKeys?: string[]) => NormalizedMediaQueryDict

export const normalizeMediaQueryDict: NormalizeMediaQueryDictUtil = mediaQueriesDict => {
  const normalizeRecursively: NormalizeRecursively = (mediaQueriesDict, parentKeys = []) => {
    return Object.entries(mediaQueriesDict).reduce((acc, [key, value]) => {
      if (isPlainObject(value)) {
        return {
          ...acc,
          ...normalizeRecursively(value, [...parentKeys, key]),
        }
      }

      const parsedValue = (() => {
        if (typeof value === 'string' && window?.matchMedia) {
          return matchMedia(value)
        }

        if (typeof value === 'string' && !window?.matchMedia) {
          throw new Error(
            `[RMB]: matchMedia unavailable. Please make sure that your environment is supporting matchMedia api and you are running it in browser`,
          )
        }

        if (typeof value === 'boolean') {
          return value
        }

        throw new Error(`[RMB]: Media query value could be either string or boolean. Received ${typeof value}`)
      })()

      return {
        ...acc,
        [[...parentKeys, key].join('.')]: parsedValue,
      }
    }, {})
  }

  return normalizeRecursively(mediaQueriesDict)
}
