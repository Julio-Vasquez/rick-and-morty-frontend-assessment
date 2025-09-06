import type { ApolloClient } from '@apollo/client'

import type { CharacterEntity } from '@domain/entities/character-entity'
import { GET_CHARACTER_BY_ID, GET_CHARACTERS } from '../queries/characters'
import type { CharacterRepository } from '@domain/repositories/character-repository'
import type {
  GetCharactersByIdData,
  GetCharactersData,
} from '../types/characters-type'
import type {
  CharacterList,
  CharacterListParams,
} from '@domain/types/character-list-params'

export class CharacterGraphQLRepository implements CharacterRepository {
  constructor(private client: ApolloClient) {}

  async list(params: CharacterListParams = {}): Promise<CharacterList> {
    const { data } = await this.client.query<GetCharactersData, CharacterListParams>(
      { query: GET_CHARACTERS, variables: params }
    )

    const info = data?.characters?.info
    const items = data?.characters?.results ?? []

    return {
      items,
      count: info?.count ?? 0,
      pages: info?.pages ?? 0,
      next: info?.next ?? null,
      prev: info?.prev ?? null,
    }
  }

  async getById(id: string): Promise<CharacterEntity> {
    const { data } = await this.client.query<GetCharactersByIdData, { id: string }>({
      query: GET_CHARACTER_BY_ID,
      variables: { id },
    })

    if (!data?.character) throw new Error(`Character with id "${id}" not found`)

    return data.character
  }
}
