import { search } from '../utils'

describe('search', () => {
  test('returns correct players from search term when searching by name', () => {
    const result = search('b', [{ firstName: 'Alex' }, { firstName: 'Bit' }])

    expect(result.length).toEqual(1)
    expect(result[0].firstName).toEqual('Bit')
  })

  test('returns correct players from search term when searching by id', () => {
    const result = search('1', [
      { firstName: 'Alex', id: '1' },
      { firstName: 'Bit', id: '2' }
    ])

    expect(result.length).toEqual(1)
    expect(result[0].firstName).toEqual('Alex')
  })
})
