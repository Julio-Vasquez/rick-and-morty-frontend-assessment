import { useCallback, useState } from 'react'

import { useServices } from '@presentation/hooks/contexts/useServices'
import type { CharacterEntity } from '@domain/entities/character-entity'

/**
 * Fetches a single character by id using the injected use case (DI).
 */
export function useCharacterById() {
  const { getCharacterById } = useServices()

  const [item, setItem] = useState<CharacterEntity | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<unknown>(null)

  const fetchById = useCallback(
    async (id: string) => {
      if (!id) return
      setLoading(true)
      setError(null)
      try {
        const data = await getCharacterById(id)
        setItem(data)
      } catch (e) {
        setError(e)
      } finally {
        setLoading(false)
      }
    },
    [getCharacterById]
  )

  return { item, loading, error, fetchById }
}
