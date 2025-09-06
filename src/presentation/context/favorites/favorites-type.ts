import type { Dispatch, ReactNode } from 'react'

import type { CharacterEntity } from '@domain/entities/character-entity'

/**
 * State for the favorites context.
 */
export interface FavoriteState {
  /** List of favorite characters. */
  listFavorites: CharacterEntity[]
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
  | { type: FavoriteActions.ADD; payload: CharacterEntity }
  | { type: FavoriteActions.REMOVE; payload: { id: CharacterEntity['id'] } }

export interface FavoritesContextValue {
  state: FavoriteState
  dispatch: Dispatch<FavoriteAction>
}

/**
 * Public API exposed by the favorites context.
 */
export interface FavoritesValue extends FavoriteState {
  /** Returns true if a character with given id is a favorite. */
  isFavorite: (id: CharacterEntity['id']) => boolean
  /** Adds a character to favorites (idempotent). */
  addFavorite: (character: CharacterEntity) => void
  /** Removes a character from favorites (no-op if not present). */
  removeFavorite: (id: CharacterEntity['id']) => void
}

/**
 * Provider props
 */
export interface FavoritesProviderProps {
  children: ReactNode
}
