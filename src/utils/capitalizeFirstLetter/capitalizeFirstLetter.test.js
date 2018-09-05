import capitalizeFirstLetter from '../capitalizeFirstLetter'

describe('capitalizeFirstLetter()', () => {
  it('capitalizes first letter of the string', () => {
    const string = capitalizeFirstLetter('lorem ipsum dolor')
    const expectedString = 'Lorem ipsum dolor'

    expect(string).toBe(expectedString)
  })
})
