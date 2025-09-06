import type { CharacterEntity } from '@domain/entities/character-entity'

export interface CharacterListParams {
  page?: number
  name?: string
  status?: 'Alive' | 'Dead' | 'unknown'
  species?: string
  gender?: 'Female' | 'Male' | 'Genderless' | 'unknown'
}

export interface Info {
  count: number
  pages: number
  next: number | null
  prev: number | null
}

export interface CharacterList extends Info {
  items: CharacterEntity[]
}
