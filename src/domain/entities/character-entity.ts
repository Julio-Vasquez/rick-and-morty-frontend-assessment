export interface CharacterEntity {
  id: string
  name: string
  image: string
  species: string
  occupation: string
  status: 'Alive' | 'Dead' | 'unknown'
  gender: 'Female' | 'Male' | 'Genderless' | 'unknown'
}
