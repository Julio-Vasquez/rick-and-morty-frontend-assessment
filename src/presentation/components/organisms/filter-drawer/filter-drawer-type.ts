import type { CharacterListParams } from '@domain/types/character-list-params'

export type FilterDrawerProps = {
  onClose: () => void
  refetch: (params?: CharacterListParams) => Promise<void>
}
