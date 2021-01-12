import { PlainObject } from '../../types'

const SEPARATOR = '.'

export const get = <T = unknown, P = unknown>(obj: PlainObject, path: string, defaultValue?: P): T => {
  return path.split(SEPARATOR).reduce((acc, segment) => {
    if (acc && acc[segment]) {
      return acc[segment]
    }

    return defaultValue || undefined
  }, obj)
}
