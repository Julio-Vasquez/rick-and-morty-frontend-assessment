import { useState } from 'react'

import type { CharacterEntity } from '@domain/entities/character-entity'
import { useCharacterById } from '@presentation/hooks/api/useCharacterById'
import { useCharacters } from '@presentation/hooks/api/useCharacters'
import { usePagination } from '@presentation/hooks/pagination/usePagination'
function ordenar(arr: CharacterEntity[], order?: 'asc' | 'desc') {
  if (!order) return arr
  return [...arr].sort((a, b) =>
    order === 'asc' ? b.name.localeCompare(a.name) : a.name.localeCompare(b.name)
  )
}
const Home = () => {
  const [state, setState] = useState<boolean | undefined>(undefined)
  const { items, refetch, total } = useCharacters()
  const { item, fetchById } = useCharacterById()
  const { nextPage, hasNext, page } = usePagination(total)

  console.log(state)
  const handleRefetch = () => setState(!state)

  const handleFetchById = () => fetchById('1')
  const handleNext = () => {
    const next = hasNext ? page + 1 : page
    //filter use first page
    refetch({ page: next })
    //
    nextPage()
  }
  return (
    <div>
      Home {page}
      <h1>
        {ordenar(
          items,
          state === undefined ? undefined : state ? 'asc' : 'desc'
        ).map(e => (
          <p key={e.id}>{e.name}</p>
        ))}
      </h1>
      <button
        className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded'
        onClick={handleRefetch}
      >
        Click hey
      </button>
      <h1>{JSON.stringify(item)}</h1>
      <button
        className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded'
        onClick={handleFetchById}
      >
        Click hey 2
      </button>
      <button
        className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded'
        onClick={handleNext}
      >
        Click hey 3
      </button>
    </div>
  )
}

export default Home
