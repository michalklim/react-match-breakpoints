import React, { ReactNode } from 'react'
import { renderHook } from '@testing-library/react-hooks'
import { initMatchBreakpoints } from '../initMatchBreakpoints'
import { useBreakpoints } from './useBreakpoints.hook'

describe('useBreakpoints', () => {
  it('retrieves denormalized state', () => {
    const TEST_OBJ = {
      mobile: true,
      desktop: {
        small: false,
        big: false,
      },
    }

    const Provider = initMatchBreakpoints(TEST_OBJ)
    const wrapper = ({ children }: { children?: ReactNode }) => <Provider>{children}</Provider>
    const { result } = renderHook(() => useBreakpoints(), { wrapper })

    expect(result.current).toEqual(TEST_OBJ)
  })
})
