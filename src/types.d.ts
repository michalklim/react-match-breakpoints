interface BreakpointsState {
  [key: string]: boolean
}

interface MediaQueryDict {
  [key: string]: boolean | string | MediaQueryDict
}

interface NormalizedMediaQueryDict {
  [key: string]: boolean | MediaQueryList
}
