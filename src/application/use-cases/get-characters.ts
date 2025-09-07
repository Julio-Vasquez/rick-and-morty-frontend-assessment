import type { CharacterListParams } from '@domain/types/character-list-params'
import type { CharacterRepository } from '@domain/repositories/character-repository'

/**
 * Use case: get list of characters.
 * Encapsulates the domain intent and delegates to the data source.
 */
export function getCharacters(repository: CharacterRepository) {
  return async (params: CharacterListParams = {}) => {
    const result = await repository.getList(params) // { items, total }
    return result
  }
}
