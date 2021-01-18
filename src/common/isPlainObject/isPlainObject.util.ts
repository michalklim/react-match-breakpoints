export function isPlainObject<T extends Record<string, unknown> = Record<string, unknown>>(obj: unknown): obj is T {
  return !!obj && typeof obj === 'object' && Object.prototype.toString.call(obj) === '[object Object]'
}
