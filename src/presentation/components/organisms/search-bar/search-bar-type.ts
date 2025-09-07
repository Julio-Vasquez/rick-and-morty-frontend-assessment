import type { CharacterListParams } from '@domain/types/character-list-params'

export interface SearchBarProps {
  refetch: (params?: CharacterListParams) => Promise<void>
}
