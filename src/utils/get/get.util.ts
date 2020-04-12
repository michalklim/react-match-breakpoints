const SEPARATOR = '.'

export const get = <T = unknown, P = unknown>(obj: Rmb.PlainObject, path: string, defaultValue?: P): T => {
  return path.split(SEPARATOR).reduce((acc, segment) => {
    if (acc && acc[segment]) {
      return acc[segment]
    }

    return defaultValue || undefined
  }, obj)
}
