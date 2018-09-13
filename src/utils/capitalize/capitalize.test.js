import capitalize from '../capitalize'

describe('capitalizeFirstLetter()', () => {
  it('capitalizes first letter of the string', () => {
    const string = capitalize('lorem ipsum dolor')
    const expectedString = 'Lorem ipsum dolor'

    expect(string).toBe(expectedString)
  })
})
