import type { CharacterEntity } from '@domain/entities/character-entity'

export function sortByName(arr: CharacterEntity[], order?: 'asc' | 'desc') {
  if (!order) return arr
  return [...arr].sort((a, b) =>
    order === 'asc' ? b.name.localeCompare(a.name) : a.name.localeCompare(b.name)
  )
}
