const SEPARATOR = '.'

export const get = <T>(obj: PlainObject, path: string, defaultValue?: T): unknown => {
  return path.split(SEPARATOR).reduce((acc, segment) => {
    if (acc && acc[segment]) {
      return acc[segment]
    }

    return defaultValue || undefined
  }, obj)
}
