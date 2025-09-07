import CharacterListSection from '../character-list-section'
import type { CharacterEntity } from '@domain/entities/character-entity'
import { useFavorites } from '@presentation/hooks/contexts/useFavorites'

import type { CharacterListProps } from './character-list-type'

const CharacterList = ({
  characters,
  favorites,
  onSortCharacters,
  onSortFavorites,
}: CharacterListProps) => {
  const { addFavorite, removeFavorite } = useFavorites()

  const handleSetFavorite = (e: CharacterEntity, isFavorite: boolean) => {
    if (!isFavorite) addFavorite(e)
    else removeFavorite(e.id)
  }

  return (
    <div className='overflow-hidden'>
      <CharacterListSection
        title='Favorites'
        items={favorites}
        isFavorite
        onToggleFavorite={c => handleSetFavorite(c, true)}
        heightClass='max-h-[33.333dvh]'
        emptyText='No favorites yet'
        className='mb-6'
        onSort={onSortFavorites}
      />

      <CharacterListSection
        title='CHARACTERS'
        items={characters}
        onToggleFavorite={c => handleSetFavorite(c, false)}
        heightClass='max-h-[44.1dvh]' // ocupa el resto del alto
        emptyText='No characters found'
        onSort={onSortCharacters}
      />
    </div>
  )
}

export default CharacterList
