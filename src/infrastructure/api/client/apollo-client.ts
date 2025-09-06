import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client'

export const createApolloClient = (uri: string) =>
  new ApolloClient({ link: new HttpLink({ uri }), cache: new InMemoryCache() })

export default createApolloClient
