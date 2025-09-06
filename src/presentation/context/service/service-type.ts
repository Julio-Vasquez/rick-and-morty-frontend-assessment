import type { ReactNode } from 'react'
import type { ApolloClient } from '@apollo/client'
import type { makeGetCharacters, makeGetCharacterById } from '@application/use-cases'

export interface Services {
  getCharacters: ReturnType<typeof makeGetCharacters>
  getCharacterById: ReturnType<typeof makeGetCharacterById>
}

export interface ServiceProviderProps {
  children: ReactNode
  client?: ApolloClient
  overrides?: Partial<Services>
  uri?: string
}
