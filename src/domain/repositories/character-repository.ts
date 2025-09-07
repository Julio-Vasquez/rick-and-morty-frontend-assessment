import type { CharacterEntity } from '@domain/entities/character-entity'

import type {
  CharacterList,
  CharacterListParams,
} from '@domain/types/character-list-params'

export interface CharacterRepository {
  getList(params?: CharacterListParams): Promise<CharacterList>
  getById(id: string): Promise<CharacterEntity>
}
