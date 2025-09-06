import { useCallback, useContext } from 'react'

import type { CharacterEntity } from '@domain/entities/character-entity'
import type { FavoritesValue } from '@presentation/context/favorites'
import { FavoriteActions, FavoritesContext } from '@presentation/context/favorites'

/**
 * Hook to safely consume the favorites context.
 */
export const useFavorites = (): FavoritesValue => {
  const context = useContext(FavoritesContext)

  if (!context) throw new Error('useFavorites must be used within FavoritesProvider')

  const { state, dispatch } = context

  const isFavorite = useCallback(
    (id: CharacterEntity['id']) => state.listFavorites.some(c => c.id === id),
    [state.listFavorites]
  )

  const addFavorite = useCallback(
    (character: CharacterEntity) => {
      dispatch({ type: FavoriteActions.ADD, payload: character })
    },
    [dispatch]
  )

  const removeFavorite = useCallback(
    (id: CharacterEntity['id']) => {
      dispatch({ type: FavoriteActions.REMOVE, payload: { id } })
    },
    [dispatch]
  )

  return { ...state, isFavorite, addFavorite, removeFavorite }
}
