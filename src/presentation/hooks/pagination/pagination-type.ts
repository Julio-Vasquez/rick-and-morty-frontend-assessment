export interface UsePaginationOptions {
  initialPage?: number
}

export interface PaginationState {
  page: number
  total: number
}

export type PaginationAction =
  | { type: 'GO_TO_PAGE'; payload: number }
  | { type: 'NEXT_PAGE' }
  | { type: 'PREV_PAGE' }
  | { type: 'RESET_PAGE' }
  | { type: 'SET_TOTAL'; payload: number }
