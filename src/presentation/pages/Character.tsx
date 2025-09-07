import { useEffect } from 'react'
import { useParams } from 'react-router'

import { useCharacterById } from '@presentation/hooks/api/useCharacterById'
import CharacterDetailsCard from '@presentation/components/organisms/character-detail-card'

const Character = () => {
  const { id } = useParams()
  const { fetchById, item } = useCharacterById()

  useEffect(() => {
    if (id) void fetchById(id)
  }, [id, fetchById])

  if (!item) return null

  return (
    <CharacterDetailsCard
      gender={item.gender}
      image={item.image}
      name={item.name}
      status={item.status}
      species={item.species}
      occupation={item.occupation}
    />
  )
}

export default Character
