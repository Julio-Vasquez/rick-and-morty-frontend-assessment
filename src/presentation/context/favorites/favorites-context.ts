import { createContext } from 'react'
import type { FavoritesContextValue } from './favorites-type'

export const FavoritesContext = createContext<FavoritesContextValue | null>(null)
