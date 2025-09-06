import type { Dispatch, ReactNode } from 'react'

import type { Character } from '@domain/entities/Character'

/**
 * State for the favorites context.
 */
export interface FavoriteState {
  /** List of favorite characters. */
  listFavorites: Character[]
}

/**
 * Reducer action types.
 */
export enum FavoriteActions {
  ADD = 'ADD',
  REMOVE = 'REMOVE',
}

/**
 * Reducer action shape.
 */
export type FavoriteAction =
  | { type: FavoriteActions.ADD; payload: Character }
  | { type: FavoriteActions.REMOVE; payload: { id: Character['id'] } }

export interface FavoritesContextValue {
  state: FavoriteState
  dispatch: Dispatch<FavoriteAction>
}

/**
 * Public API exposed by the favorites context.
 */
export interface FavoritesValue extends FavoriteState {
  /** Returns true if a character with given id is a favorite. */
  isFavorite: (id: Character['id']) => boolean
  /** Adds a character to favorites (idempotent). */
  addFavorite: (character: Character) => void
  /** Removes a character from favorites (no-op if not present). */
  removeFavorite: (id: Character['id']) => void
}

/**
 * Provider props
 */
export interface FavoritesProviderProps {
  children: ReactNode
}
