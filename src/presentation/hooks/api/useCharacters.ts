import { useCallback, useEffect, useState } from 'react'

import { useServices } from '@presentation/hooks/contexts/useServices'
import type { CharacterEntity } from '@domain/entities/character-entity'
import type {
  CharacterList,
  CharacterListParams,
} from '@domain/types/character-list-params'

/**
 * Lists characters using the injected use case (DI).
 * Exposes an imperative fetch function to control when to load.
 */
export function useCharacters(fetchOnCall: boolean = true) {
  const { getCharacters } = useServices()

  const [items, setItems] = useState<CharacterEntity[]>([])
  const [total, setTotal] = useState(0)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<unknown>(null)

  const fetchCharacters = useCallback(
    async (params: CharacterListParams = {}) => {
      setLoading(true)
      setError(null)
      try {
        const { items, count }: CharacterList = await getCharacters(params) // { items, total }
        setItems(items)
        setTotal(count)
      } catch (e) {
        setError(e)
      } finally {
        setLoading(false)
      }
    },
    [getCharacters]
  )

  useEffect(() => {
    if (fetchOnCall) void fetchCharacters()
  }, [fetchCharacters, fetchOnCall])

  return { items, total, loading, error, refetch: fetchCharacters }
}
