import { useCharacters } from '@presentation/hooks/api/useCharacters'
import { usePagination } from '@presentation/hooks/pagination/usePagination'

import type { CharacterEntity } from '@domain/entities/character-entity'
import { useFavorites } from '@presentation/hooks/contexts/useFavorites'

import CharacterListSection from '../character-list-section'

const CharacterList = () => {
  const { items, refetch, total } = useCharacters()
  const { addFavorite, listFavorites, removeFavorite } = useFavorites()
  const { nextPage, hasNext, page, hasPrev, prevPage } = usePagination(total)
  const favoriteIds = new Set(listFavorites.map(e => e.id))

  const filteredData = items.filter(item => !favoriteIds.has(item.id))

  const handleSetFavorite = (e: CharacterEntity, isFavorite: boolean) => {
    if (!isFavorite) addFavorite(e)
    else removeFavorite(e.id)
  }

  return (
    <div className='overflow-hidden'>
      <CharacterListSection
        title='Favorites'
        items={listFavorites}
        isFavorite
        onToggleFavorite={c => handleSetFavorite(c, true)}
        heightClass='max-h-[33.333dvh]'
        emptyText='No favorites yet'
        className='mb-6'
      />

      <CharacterListSection
        title='CHARACTERS'
        items={filteredData}
        onToggleFavorite={c => handleSetFavorite(c, false)}
        heightClass='max-h-[50dvh]' // ocupa el resto del alto
        emptyText='No characters found'
      />
    </div>
  )
}

export default CharacterList
