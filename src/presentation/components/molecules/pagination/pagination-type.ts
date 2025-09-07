export interface PaginationProps {
  totalPages: number
  initialPage?: number
  onNext: () => void
  onPrev: () => void
}
