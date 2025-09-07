import type { CharacterEntity } from '@domain/entities/character-entity'
import type { SortOrder } from '@presentation/components/templates/Layout/layout-type'

export function sortByName(arr: CharacterEntity[], order: SortOrder) {
  if (order === 'none') return arr
  return [...arr].sort((a, b) =>
    order === 'asc' ? b.name.localeCompare(a.name) : a.name.localeCompare(b.name)
  )
}
