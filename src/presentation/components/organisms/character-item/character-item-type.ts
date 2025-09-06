export interface CharacterItemProps {
  name: string
  species: string
  image: string
  isFavorite?: boolean
  onToggleFavorite: () => void
  className?: string
}
