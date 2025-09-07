import type { CharacterEntity } from '@domain/entities/character-entity'

export interface CharacterListSectionProps {
  title: string
  items: CharacterEntity[]
  isFavorite?: boolean
  onToggleFavorite?: (c: CharacterEntity) => void
  heightClass?: string // ej: "max-h-[33.333dvh]" o "flex-1 min-h-0"
  emptyText?: string
  className?: string
}
