import { describe, expect, test } from 'vitest'
import { sortByName } from '@presentation/utils/sort-by-name'

import { characters } from '@presentation/constants/tests-mock'

const base = Object.values(characters)
describe('sortByName', () => {
  test('should return the same array reference when order is "none"', () => {
    const arr = [...base]
    const out = sortByName(arr, 'none')
    expect(out).toBe(arr)
    expect(out.map(x => x.name)).toEqual(arr.map(x => x.name))
  })

  test('should sort ascending (A→Z) when order is "asc"', () => {
    const input = [...base]
    const out = sortByName(input, 'asc')

    expect(input).not.toBe(out)
    expect(input.map(x => x.name)).toEqual(['Rick', 'Morty'])

    expect(out.map(x => x.name)).toEqual(['Rick', 'Morty'])
  })

  test('should sort descending (Z→A) when order is "desc"', () => {
    const input = [...base]
    const out = sortByName(input, 'desc')

    expect(input).not.toBe(out)
    expect(input.map(x => x.name)).toEqual(['Rick', 'Morty'])

    expect(out.map(x => x.name)).toEqual(['Morty', 'Rick'])
  })
})
