import type { CharacterEntity } from '@domain/entities/character-entity'

export interface CharacterDetailsCardProps extends Omit<CharacterEntity, 'id'> {
  isFavorite?: boolean
}
