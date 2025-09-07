import type { CharacterListParams } from '@domain/types/character-list-params'

export interface FilterPopupProps {
  onClose: () => void
  refetch: (params?: CharacterListParams) => Promise<void>
}
