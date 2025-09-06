import { gql } from '@apollo/client'

export const GET_CHARACTERS = gql`
  query GetCharacters(
    $page: Int
    $name: String
    $status: String
    $species: String
    $gender: String
  ) {
    characters(
      page: $page
      filter: { name: $name, status: $status, species: $species, gender: $gender }
    ) {
      info {
        count
        pages
        next
        prev
      }
      results {
        id
        name
        image
        species
        status
        gender
        occupation: type
      }
    }
  }
`

export const GET_CHARACTER_BY_ID = gql`
  query GetCharacterById($id: ID!) {
    character(id: $id) {
      id
      name
      image
      species
      status
      gender
      occupation: type
    }
  }
`
