import React, { FunctionComponent, ReactNode, Fragment } from 'react'
import { render } from '@testing-library/react'
import { initMatchBreakpoints } from '../initMatchBreakpoints'
import { withBreakpoints } from './withBreakpoints.hoc'
import { WithBreakpointsProps } from 'react-match-breakpoints'

describe('withBreakpoints', () => {
  it('enhances component with denormalized state', () => {
    const TEST_OBJ = {
      mobile: true,
      desktop: {
        small: false,
        big: false,
      },
    }

    const Provider = initMatchBreakpoints(TEST_OBJ)
    const wrapper = ({ children }: { children?: ReactNode }) => <Provider>{children}</Provider>
    const Component: FunctionComponent<WithBreakpointsProps<typeof TEST_OBJ>> = ({ breakpoints }) => {
      return <Fragment>{JSON.stringify(breakpoints)}</Fragment>
    }
    const EnhancedComponent = withBreakpoints(Component)

    const { container } = render(<EnhancedComponent />, { wrapper })

    expect(container.textContent).toEqual(JSON.stringify(TEST_OBJ))
  })
})
