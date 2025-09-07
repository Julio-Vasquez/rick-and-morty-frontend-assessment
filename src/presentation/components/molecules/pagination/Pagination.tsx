import { useState } from 'react'

import type { PaginationProps } from './pagination-type'

export default function Pagination({
  totalPages,
  initialPage = 1,
  onNext,
  onPrev,
}: PaginationProps) {
  const [page, setPage] = useState(initialPage)
  const handleNextPage = () => {
    setPage(prev => prev + 1)
    onNext()
  }
  const handlePrevPage = () => {
    setPage(prev => prev - 1)
    onPrev()
  }
  return (
    <div className='flex items-center gap-4'>
      <button
        onClick={handlePrevPage}
        disabled={page === 1}
        className='rounded-lg bg-primary-100 px-3 py-1 text-sm font-medium text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-primary-600'
      >
        ←
      </button>

      <span className='text-sm font-semibold text-gray-800'>
        Página {page} de {totalPages}
      </span>

      <button
        onClick={handleNextPage}
        disabled={page === totalPages}
        className='rounded-lg bg-primary-100 px-3 py-1 text-sm font-medium text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-primary-600'
      >
        →
      </button>
    </div>
  )
}
