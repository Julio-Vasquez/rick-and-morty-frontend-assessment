import { describe, test, expect } from 'vitest'

import { FavoriteActions } from '../favorites-type'
import { characters } from '@presentation/constants/tests-mock'
import { favoritesReducer, initialFavoriteState } from '../favorites-reducer'

describe('favoritesReducer', () => {
  test('should add a character when not present', () => {
    const initialState = initialFavoriteState
    const reducer = favoritesReducer(initialState, {
      type: FavoriteActions.ADD,
      payload: characters.rick,
    })

    expect(reducer.listFavorites).toHaveLength(1)
    expect(reducer.listFavorites[0].id).toBe('1')
    expect(initialState.listFavorites).toHaveLength(0)
  })

  test('should be idempotent when adding the same character twice', () => {
    const reducerOne = favoritesReducer(initialFavoriteState, {
      type: FavoriteActions.ADD,
      payload: characters.rick,
    })
    const reducerTwo = favoritesReducer(reducerOne, {
      type: FavoriteActions.ADD,
      payload: characters.rick,
    })

    expect(reducerTwo.listFavorites).toHaveLength(1)
    expect(reducerTwo.listFavorites[0].id).toBe('1')
  })

  test('should remove an existing character by id', () => {
    const startState = { listFavorites: [characters.rick, characters.morty] }
    const reducer = favoritesReducer(startState, {
      type: FavoriteActions.REMOVE,
      payload: { id: '1' },
    })

    expect(reducer.listFavorites).toHaveLength(1)
    expect(reducer.listFavorites[0].id).toBe('2')

    expect(startState.listFavorites).toHaveLength(2)
  })

  test('should return the same state when removing a non-existing id', () => {
    const startState = { listFavorites: [characters.rick] }
    const reducer = favoritesReducer(startState, {
      type: FavoriteActions.REMOVE,
      payload: { id: '999' },
    })
    expect(reducer).toBe(startState) // unchanged reference indicates no-op branch
  })

  test('should return the same state object on unknown action', () => {
    const anyAction = '__UNKNOWN_ACTION__' as unknown
    // @ts-expect-error : unknown action
    const stateAfterUnknown = favoritesReducer(initialFavoriteState, {
      type: anyAction,
    })

    expect(stateAfterUnknown).toBe(initialFavoriteState)
  })
})
