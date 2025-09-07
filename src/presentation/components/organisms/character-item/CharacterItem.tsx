import { Link } from 'react-router'

import { PATHS } from '@presentation/constants/routes'
import Avatar from '@presentation/components/atoms/avatar'
import type { CharacterItemProps } from './character-item-type'
import FavoriteToggle from '@presentation/components/molecules/favorite-toggle'
/**
 * CharacterItem molecule.
 * Displays avatar, name, species and favorite toggle button.
 */
const CharacterItem = ({
  name,
  species,
  image,
  isFavorite = false,
  onToggleFavorite,
  className = '',
  id,
}: CharacterItemProps) => {
  return (
    <div
      className={`flex items-center justify-between gap-3 px-4 py-3 border-t border-neutral-200 ${className}`}
    >
      <Link to={`${PATHS.character}/${id}`}>
        <div className='flex items-center gap-3 min-w-0'>
          <Avatar src={image} alt={name} size={40} className='w-[40px] h-[40px]' />
          <div className='min-w-0'>
            <p className='text-base font-semibold text-neutral-900 truncate'>
              {name}
            </p>
            <p className='text-sm text-neutral-500 truncate'>{species}</p>
          </div>
        </div>
      </Link>
      {/* Favorite Toggle */}
      <FavoriteToggle active={isFavorite} onToggle={onToggleFavorite} />
    </div>
  )
}

export default CharacterItem
