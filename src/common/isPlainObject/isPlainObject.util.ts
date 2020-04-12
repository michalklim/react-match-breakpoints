export const isPlainObject = (obj: unknown): obj is object => {
  return !!obj && typeof obj === 'object' && Object.prototype.toString.call(obj) === '[object Object]'
}
