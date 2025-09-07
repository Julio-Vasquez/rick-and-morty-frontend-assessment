import type { CharacterListParams } from '@domain/types/character-list-params'

export interface FilterContentProps {
  onClose: () => void
  refetch: (params?: CharacterListParams) => Promise<void>
}

export type Character = 'All' | 'Starred' | 'Others'
export type Specie = 'All' | 'Human' | 'Alien'
