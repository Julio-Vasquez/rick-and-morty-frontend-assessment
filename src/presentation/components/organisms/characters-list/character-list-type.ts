import type { CharacterEntity } from '@domain/entities/character-entity'

export interface CharacterListProps {
  favorites: CharacterEntity[]
  characters: CharacterEntity[]
  onSortFavorites: () => void
  onSortCharacters: () => void
}
