import type { CharacterEntity } from '@domain/entities/character-entity'

type Keys = 'rick' | 'morty'

export const characters: Record<Keys, Omit<CharacterEntity, 'occupation'>> = {
  rick: {
    id: '1',
    name: 'Rick',
    image: '',
    species: 'Human',
    status: 'Alive',
    gender: 'Male',
  },
  morty: {
    id: '2',
    name: 'Morty',
    image: '',
    species: 'Human',
    status: 'Alive',
    gender: 'Male',
  },
}
