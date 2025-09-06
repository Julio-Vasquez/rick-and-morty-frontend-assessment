import { PAGE_SIZE } from '@presentation/constants/environment'
import type { PaginationAction, PaginationState } from './pagination-type'

export const paginationReducer = (
  state: PaginationState,
  action: PaginationAction
): PaginationState => {
  const pages = Math.ceil(Math.max(0, state.total) / PAGE_SIZE)
  const maxPage = pages > 0 ? pages : 1

  switch (action.type) {
    case 'GO_TO_PAGE':
      return { ...state, page: Math.min(Math.max(1, action.payload), maxPage) }

    case 'NEXT_PAGE':
      return { ...state, page: Math.min(state.page + 1, maxPage) }

    case 'PREV_PAGE':
      return { ...state, page: Math.max(state.page - 1, 1) }

    case 'RESET_PAGE':
      return { ...state, page: 1 }

    case 'SET_TOTAL': {
      const newTotal = Math.max(0, Math.trunc(action.payload))
      const newPages = Math.ceil(newTotal / PAGE_SIZE)
      const newMaxPage = newPages > 0 ? newPages : 1
      return { ...state, total: newTotal, page: Math.min(state.page, newMaxPage) }
    }

    default:
      return state
  }
}
