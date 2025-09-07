import { useState } from 'react'
import { Outlet, useMatch, useNavigate } from 'react-router'

import { PATHS } from '@presentation/constants/routes'
import type { SortOrder, SortType } from './layout-type'
import { sortByName } from '@presentation/utils/sort-by-name'
import SearchBar from '@presentation/components/organisms/search-bar'
import { useCharacters } from '@presentation/hooks/api/useCharacters'
import Pagination from '@presentation/components/molecules/pagination'
import BackButton from '@presentation/components/molecules/back-button'
import { useFavorites } from '@presentation/hooks/contexts/useFavorites'
import { usePagination } from '@presentation/hooks/pagination/usePagination'
import CharacterList from '@presentation/components/organisms/characters-list'

const Layout = () => {
  const navigate = useNavigate()
  const { listFavorites } = useFavorites()
  const { items, refetch, total } = useCharacters()
  const { nextPage, hasNext, page, hasPrev, prevPage, totalPages } =
    usePagination(total)
  const [orders, setOrders] = useState<Record<SortType, SortOrder>>({
    characters: 'none',
    favorites: 'none',
  })

  const isDetail = !!useMatch('/select-character/:id')
  const className = `${
    isDetail ? 'hidden' : 'flex'
  } md:flex flex-col border-r border-neutral-200 md:bg-[#fcfcfc] min-h-dvh`

  const favoriteIds = new Set(listFavorites.map(e => e.id))
  const characters = items.filter(item => !favoriteIds.has(item.id))

  const toggleOrder = (key: SortType) => {
    setOrders(prev => {
      const current = prev[key]
      const next = current === 'none' ? 'asc' : current === 'asc' ? 'desc' : 'asc'

      return { ...prev, [key]: next }
    })
  }

  const handleSortFavorites = () => toggleOrder('favorites')
  const handleSortCharacters = () => toggleOrder('characters')

  const handleNextPage = () => {
    const next = hasNext ? page + 1 : page
    refetch({ page: next })
    nextPage()
  }

  const handlePrevPage = () => {
    const prev = hasPrev ? page - 1 : page
    refetch({ page: prev })
    prevPage()
  }

  const sortedCharacters = sortByName(characters, orders['characters'])
  const sortedFavorites = sortByName(listFavorites, orders['favorites'])

  return (
    <div
      className='min-h-dvh bg-white text-neutral-900 font-greycliff'
      data-testid='main-layout'
    >
      <div className='min-h-dvh md:grid md:grid-cols-[320px_1fr] bg-white'>
        {/* Sidebar */}
        <aside className={className}>
          <div className='px-6 py-5 border-b md:bg-[#fcfcfc] border-neutral-100'>
            <div className='pb-4 px-2'>
              <h1 className='font-semibold text-2xl'>Rick and Morty list</h1>
            </div>
            <SearchBar refetch={refetch} />
          </div>
          <div className='flex-1 overflow-y-auto'>
            <div className='p-6 text-sm text-neutral-500'>
              <CharacterList
                onSortCharacters={handleSortCharacters}
                onSortFavorites={handleSortFavorites}
                favorites={sortedFavorites}
                characters={sortedCharacters}
              />
            </div>
            <div className='flex justify-center'>
              <Pagination
                onNext={handleNextPage}
                onPrev={handlePrevPage}
                totalPages={totalPages}
              />
            </div>
          </div>
        </aside>
        {/* Main Content */}
        <main
          className={`${isDetail ? 'block' : 'hidden'} md:block min-h-dvh`}
          aria-label='detail-panel'
        >
          {isDetail && (
            <BackButton label='Atras' onClick={() => navigate(PATHS.character)} />
          )}
          <div className='h-full overflow-y-auto'>
            <div className='px-8 lg:px-16 '>
              <Outlet />
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Layout
