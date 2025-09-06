import type { MouseEvent } from 'react'

import Heart from '@presentation/components/atoms/icons/heart'
import type { FavoriteToggleProps } from './favorite-toggle-type'

const FavoriteToggle = ({
  active,
  onToggle,
  ariaLabelOn = 'Remove from favorites',
  ariaLabelOff = 'Add to favorites',
  className = '',
}: FavoriteToggleProps) => {
  const isActive = !!active
  const computedClassName = `grid h-8 w-8 place-items-center rounded-full transition-opacity hover:opacity-80 ${className}`

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    onToggle?.()
  }

  return (
    <button
      type='button'
      aria-pressed={isActive}
      aria-label={active ? ariaLabelOn : ariaLabelOff}
      onClick={handleClick}
      className={computedClassName}
    >
      <Heart filled={isActive} />
    </button>
  )
}

export default FavoriteToggle
