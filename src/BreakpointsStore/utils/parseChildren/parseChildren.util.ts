import { Children, cloneElement, isValidElement, ReactNode } from 'react'

type ParseChildrenUtil = (children: ReactNode, breakpointId: string) => ReactNode

export const CLASS_PREFIX = 'rmb-'

export const parseChildren: ParseChildrenUtil = (children, breakpointId) => {
  return Children.map(children, child => {
    if (!isValidElement(child)) {
      return child
    }

    const {
      props: { className },
    } = child
    const modifiedClassName = !!className
      ? `${className} ${CLASS_PREFIX}${breakpointId}`
      : `${CLASS_PREFIX}${breakpointId}`

    return cloneElement(child, { className: modifiedClassName })
  })
}
