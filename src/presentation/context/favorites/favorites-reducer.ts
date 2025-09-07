import { FavoriteActions } from './favorites-type'

import { StorageUseCase } from '@application/use-cases/storage'
import type { FavoriteState, FavoriteAction } from './favorites-type'
import type { CharacterEntity } from '@domain/entities/character-entity'
import { StorageManagerRepository } from '@infrastructure/storage/repositories/storage-repository'
import { STORAGE_KEY } from '@presentation/constants/environment'

const storageManager = new StorageUseCase(
  new StorageManagerRepository('localStorage'),
  STORAGE_KEY
)

const hydrateData = (): CharacterEntity[] => {
  const raw = storageManager.getRawItem()
  if (!raw) return []
  return JSON.parse(raw) as CharacterEntity[]
}

export const initialFavoriteState: FavoriteState = {
  listFavorites: hydrateData(),
}

export function favoritesReducer(
  state: FavoriteState,
  action: FavoriteAction
): FavoriteState {
  switch (action.type) {
    case FavoriteActions.ADD: {
      // Prevent duplicates by id.
      if (state.listFavorites.some(c => c.id === action.payload.id)) return state
      const favorites = [...state.listFavorites, action.payload]
      storageManager.setItem(favorites)
      return { listFavorites: favorites }
    }

    case FavoriteActions.REMOVE: {
      // Remove by id, return unchanged state if id not found.
      const next = state.listFavorites.filter(c => c.id !== action.payload.id)
      if (next.length === state.listFavorites.length) return state
      storageManager.setItem(next)
      return { listFavorites: next }
    }

    default:
      return state
  }
}
