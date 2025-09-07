import type { CharacterEntity } from '@domain/entities/character-entity'

type Keys = 'rick' | 'morty'

export const characters: Record<Keys, CharacterEntity> = {
  rick: {
    id: '1',
    name: 'Rick',
    image: '',
    species: 'Human',
    status: 'Alive',
    gender: 'Male',
    occupation: '',
  },
  morty: {
    id: '2',
    name: 'Morty',
    image: '',
    species: 'Human',
    status: 'Alive',
    gender: 'Male',
    occupation: '',
  },
}
