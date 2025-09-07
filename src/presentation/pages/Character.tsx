import { useEffect } from 'react'
import { useParams } from 'react-router'

import { useFavorites } from '@presentation/hooks/contexts/useFavorites'
import { useCharacterById } from '@presentation/hooks/api/useCharacterById'
import CharacterDetailsCard from '@presentation/components/organisms/character-detail-card'

const Character = () => {
  const { id } = useParams()
  const { isFavorite } = useFavorites()
  const { fetchById, item } = useCharacterById()

  useEffect(() => {
    if (id) void fetchById(id)
  }, [id, fetchById])

  if (!id) return null

  const favorite = isFavorite(id)

  if (!item) return null

  return (
    <CharacterDetailsCard
      gender={item.gender}
      image={item.image}
      name={item.name}
      status={item.status}
      species={item.species}
      occupation={item.occupation}
      isFavorite={favorite}
    />
  )
}

export default Character
