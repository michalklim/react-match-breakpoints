import React, { FunctionComponent } from 'react'
import { render } from '@testing-library/react'
import { parseChildren, CLASS_PREFIX } from './parseChildren.util'

const TEST_ID = 'TEST_ID'

const Wrapper: FunctionComponent = ({ children }) => {
  return <>{parseChildren(children, TEST_ID)}</>
}

describe('parseChildren', () => {
  it('adds classname to element without any class name', () => {
    const { container } = render(
      <Wrapper>
        <span>test</span>
      </Wrapper>,
    )
    expect((container?.firstChild as HTMLElement)?.classList.contains(`${CLASS_PREFIX}${TEST_ID}`)).toBe(true)
  })

  it('extends element class names', () => {
    const DEFAULT_CLASS = 'default'
    const { container } = render(
      <Wrapper>
        <span className={DEFAULT_CLASS}>test</span>
      </Wrapper>,
    )

    expect((container?.firstChild as HTMLElement)?.classList.contains(`${CLASS_PREFIX}${TEST_ID}`)).toBe(true)
    expect((container?.firstChild as HTMLElement)?.classList.contains(DEFAULT_CLASS)).toBe(true)
  })

  const TEST_CASES = [
    {
      key: 'string',
      value: 'test',
    },
    {
      key: 'number',
      value: 3,
    },
    {
      key: 'null',
      value: null,
    },
    {
      key: 'function',
      value: () => null,
    },
  ]

  describe.each(TEST_CASES)('returns children as is if not valid react element', testCase => {
    it(`not adds class name of children type is ${testCase.key}`, () => {
      const { container } = render(<Wrapper>{testCase.value}</Wrapper>)
      expect((container?.firstChild as HTMLElement)?.classList).toBeUndefined()
    })
  })
})
