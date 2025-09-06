import { useMemo, useReducer } from 'react'

import { FavoritesContext } from './favorites-context'
import { favoritesReducer, initialFavoriteState } from './favorites-reducer'
import type { FavoritesContextValue, FavoritesProviderProps } from './favorites-type'

export const FavoritesProvider = ({ children }: FavoritesProviderProps) => {
  const [state, dispatch] = useReducer(favoritesReducer, initialFavoriteState)

  const value = useMemo<FavoritesContextValue>(
    () => ({ state, dispatch }),
    [state, dispatch]
  )

  return (
    <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>
  )
}
