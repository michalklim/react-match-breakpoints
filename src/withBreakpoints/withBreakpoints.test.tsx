import React, { FunctionComponent, ReactNode, Fragment } from 'react'
import { render } from '@testing-library/react'
import { initMatchBreakpoints } from '../initMatchBreakpoints'
import { withBreakpoints } from './withBreakpoints.hoc'

describe('withBreakpoints', () => {
  it.skip('enhances component with denormalized state', () => {
    const TEST_OBJ = {
      mobile: 'only screen and (max-width: 768px)',
      desktop: {
        small: 'only screen and (max-width: 768px)',
        big: 'only screen and (max-width: 768px)',
      },
    }

    const Provider = initMatchBreakpoints(TEST_OBJ)
    const wrapper = ({ children }: { children?: ReactNode }) => <Provider>{children}</Provider>
    const Component: FunctionComponent<Rmb.InjectedBreakpointsProps> = ({ breakpoints }) => {
      return <Fragment>{JSON.stringify(breakpoints)}</Fragment>
    }
    const EnhancedComponent = withBreakpoints(Component)

    const { container } = render(<EnhancedComponent />, { wrapper })

    expect(container.textContent).toEqual(JSON.stringify(TEST_OBJ))
  })
})
