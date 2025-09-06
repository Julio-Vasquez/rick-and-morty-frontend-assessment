import { useReducer, useEffect, useMemo } from 'react'

import { paginationReducer } from './pagination-reducer'
import type { UsePaginationOptions } from './pagination-type'
import { PAGE_SIZE } from '@presentation/constants/environment'

export const usePagination = (total: number, options?: UsePaginationOptions) => {
  const [state, dispatch] = useReducer(paginationReducer, {
    page: options?.initialPage ?? 1,
    total,
  })

  // Sincroniza el total cuando cambia la prop.
  useEffect(() => {
    dispatch({ type: 'SET_TOTAL', payload: total })
  }, [total])

  const pages = useMemo(
    () => Math.ceil(Math.max(0, state.total) / PAGE_SIZE),
    [state.total]
  )

  const hasPrev = state.page > 1
  const hasNext = pages > 0 && state.page < pages

  return {
    page: state.page,
    pageSize: PAGE_SIZE,
    pages,
    hasPrev,
    hasNext,

    goToPage: (page: number) => dispatch({ type: 'GO_TO_PAGE', payload: page }),
    nextPage: () => dispatch({ type: 'NEXT_PAGE' }),
    prevPage: () => dispatch({ type: 'PREV_PAGE' }),
    resetPage: () => dispatch({ type: 'RESET_PAGE' }),
  }
}
