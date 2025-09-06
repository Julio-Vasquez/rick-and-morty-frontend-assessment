import type { CharacterRepository } from '@domain/repositories/character-repository'

/**
 * Use case: get a character by ID.
 * Encapsulates the domain intent and delegates to the data source.
 */
export function makeGetCharacterById(repository: CharacterRepository) {
  return async (id: string) => {
    const result = await repository.getById(id)
    return result
  }
}
