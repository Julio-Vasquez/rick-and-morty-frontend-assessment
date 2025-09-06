import { FavoriteActions } from './favorites-type'
import type { FavoriteState, FavoriteAction } from './favorites-type'

export const initialFavoriteState: FavoriteState = {
  listFavorites: [],
}

export function favoritesReducer(
  state: FavoriteState,
  action: FavoriteAction
): FavoriteState {
  switch (action.type) {
    case FavoriteActions.ADD: {
      // Prevent duplicates by id.
      if (state.listFavorites.some(c => c.id === action.payload.id)) return state
      return { listFavorites: [...state.listFavorites, action.payload] }
    }

    case FavoriteActions.REMOVE: {
      // Remove by id, return unchanged state if id not found.
      const next = state.listFavorites.filter(c => c.id !== action.payload.id)
      if (next.length === state.listFavorites.length) return state
      return { listFavorites: next }
    }

    default:
      return state
  }
}
