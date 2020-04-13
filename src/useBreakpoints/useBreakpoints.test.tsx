import React, { ReactNode } from 'react'
import { renderHook } from '@testing-library/react-hooks'
import { initMatchBreakpoints } from '../initMatchBreakpoints'
import { useBreakpoints } from './useBreakpoints.hook'

let windowSpy: jest.SpyInstance

beforeEach(() => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
  // @ts-ignore
  windowSpy = jest.spyOn(global, 'window', 'get')
})

afterEach(() => {
  windowSpy.mockRestore()
})

describe('useBreakpoints', () => {
  it.skip('retrieves denormalized state', () => {
    windowSpy.mockImplementation(() => ({
      // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
      // @ts-ignore
      ...global.window,
      matchMedia: (val: string) => ({
        addListener: jest.fn(),
        removeListener: jest.fn,
        matches: false,
        media: val,
        onchange: jest.fn(),
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      }),
    }))

    const TEST_OBJ = {
      mobile: 'only screen and (max-width: 768px)',
      desktop: {
        small: 'only screen and (max-width: 768px)',
        big: 'only screen and (max-width: 768px)',
      },
    }

    const EXPECTED_RESULT = {
      mobile: false,
      desktop: {
        small: false,
        big: false,
      },
    }

    const Provider = initMatchBreakpoints(TEST_OBJ)
    const wrapper = ({ children }: { children?: ReactNode }) => <Provider>{children}</Provider>
    const { result } = renderHook(() => useBreakpoints(), { wrapper })
    expect(result.current).toEqual(EXPECTED_RESULT)
  })
})
