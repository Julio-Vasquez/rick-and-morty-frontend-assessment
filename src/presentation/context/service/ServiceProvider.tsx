import { useMemo } from 'react'

import { ServicesContext } from './service-context'
import createApolloClient from '@infrastructure/api/client'
import { API_URL } from '@presentation/constants/environment'
import type { ServiceProviderProps, Services } from './service-type'
import { getCharacters, getCharacterById } from '@application/use-cases'
import type { CharacterRepository } from '@domain/repositories/character-repository'
import { CharacterGraphQLRepository } from '@infrastructure/api/repositories/character-repository'

export function ServicesProvider({
  children,
  client,
  overrides,
  uri,
}: ServiceProviderProps) {
  const services = useMemo<Services>(() => {
    // 1) Build or reuse Apollo client
    const resolvedUri = uri ?? API_URL
    const apollo = client ?? createApolloClient(resolvedUri)

    // 2) Build data sources (repository)
    const characterRepository: CharacterRepository = new CharacterGraphQLRepository(
      apollo
    )

    // 3) Bind use cases
    const baseServices: Services = {
      getCharacters: getCharacters(characterRepository),
      getCharacterById: getCharacterById(characterRepository),
    }

    // 4) Allow test overrides without module mocks
    return { ...baseServices, ...overrides }
  }, [client, overrides, uri])

  return (
    <ServicesContext.Provider value={services}>{children}</ServicesContext.Provider>
  )
}
