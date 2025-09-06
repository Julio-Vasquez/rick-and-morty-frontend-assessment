import type { ContextType } from 'react'
import { describe, test, expect, vi } from 'vitest'
import { renderHook, act } from '@testing-library/react'

import { useFavorites } from '../useFavorites'
import { FavoritesContext } from '@presentation/context/favorites'
import { FavoriteActions } from '@presentation/context/favorites'
import { characters } from '@presentation/constants/tests-mock'

/** Minimal provider wrapper to inject the FavoritesContext value */
const FavoritesProvider = (value: ContextType<typeof FavoritesContext>) => {
  return ({ children }: { children: React.ReactNode }) => (
    <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>
  )
}

describe('useFavorites', () => {
  test('should throw when used outside FavoritesProvider', () => {
    // Hook must fail fast if no provider is present
    expect(() => renderHook(() => useFavorites())).toThrowError(
      /useFavorites must be used within FavoritesProvider/i
    )
  })

  test('should expose current state and compute isFavorite correctly', () => {
    const dispatch = vi.fn()
    const wrapper = FavoritesProvider({
      state: { listFavorites: [characters.rick] },
      dispatch,
    })

    const { result } = renderHook(() => useFavorites(), { wrapper })

    expect(result.current.listFavorites).toHaveLength(1)
    expect(result.current.listFavorites[0].id).toBe('1')

    expect(result.current.isFavorite('1')).toBe(true)
    expect(result.current.isFavorite('2')).toBe(false)
  })

  test('should dispatch ADD action when addFavorite is called', () => {
    const dispatch = vi.fn()
    const wrapper = FavoritesProvider({
      state: { listFavorites: [] },
      dispatch,
    })

    const { result } = renderHook(() => useFavorites(), { wrapper })

    act(() => result.current.addFavorite(characters.rick))

    expect(dispatch).toHaveBeenCalledWith({
      type: FavoriteActions.ADD,
      payload: characters.rick,
    })
  })

  test('should dispatch REMOVE action when removeFavorite is called', () => {
    const dispatch = vi.fn()
    const wrapper = FavoritesProvider({
      state: { listFavorites: [characters.rick, characters.morty] },
      dispatch,
    })

    const { result } = renderHook(() => useFavorites(), { wrapper })

    act(() => result.current.removeFavorite('2'))

    expect(dispatch).toHaveBeenCalledWith({
      type: FavoriteActions.REMOVE,
      payload: { id: '2' },
    })
  })
})
