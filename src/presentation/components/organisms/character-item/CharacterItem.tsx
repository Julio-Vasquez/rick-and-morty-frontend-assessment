import Avatar from '@presentation/components/atoms/avatar'
import FavoriteToggle from '@presentation/components/molecules/favorite-toggle'
import type { CharacterItemProps } from './character-item-type'

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
}: CharacterItemProps) => {
  return (
    <div
      className={`flex items-center justify-between gap-3 px-4 py-3 border-t border-neutral-200 ${className}`}
    >
      <div className='flex items-center gap-3 min-w-0'>
        <Avatar src={image} alt={name} size={40} className='w-[40px] h-[40px]' />
        <div className='min-w-0'>
          <p className='text-base font-semibold text-neutral-900 truncate'>{name}</p>
          <p className='text-sm text-neutral-500 truncate'>{species}</p>
        </div>
      </div>

      {/* Favorite Toggle */}
      <FavoriteToggle active={isFavorite} onToggle={onToggleFavorite} />
    </div>
  )
}

export default CharacterItem
