import { isPlainObject } from '../isPlainObject'

export const set = (obj: Rmb.PlainObject, path: string | string[], value: unknown): Rmb.PlainObject => {
  if (Object(obj) !== obj) {
    return obj
  }

  const parsedPath = Array.isArray(path) ? path : path.toString().match(/[^.[\]]+/g) || []

  parsedPath.slice(0, -1).reduce((acc, segment) => {
    if (isPlainObject(acc[segment])) {
      return acc[segment]
    }

    if (!isPlainObject(acc[segment])) {
      return (acc[segment] = {})
    }
  }, obj)[parsedPath[parsedPath.length - 1]] = value

  return obj
}
