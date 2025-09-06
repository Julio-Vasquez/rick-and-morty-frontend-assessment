import type { Info } from '@domain/types/character-list-params'
import type { CharacterEntity } from '@domain/entities/character-entity'

interface Character {
  info?: Info | null
  results?: CharacterEntity[] | null
}

export interface GetCharactersData {
  characters?: Character | null
}

export interface GetCharactersByIdData {
  character?: CharacterEntity | null
}
