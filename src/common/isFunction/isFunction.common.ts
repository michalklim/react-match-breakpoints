export function isFunction(val: unknown): val is Function {
  return val && {}.toString.call(val) === '[object Function]'
}
