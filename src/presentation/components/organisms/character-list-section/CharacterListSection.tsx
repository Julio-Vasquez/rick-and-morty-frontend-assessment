import Title from '@presentation/components/atoms/title/Title'
import type { CharacterListSectionProps } from './character-list-type'
import CharacterItem from '@presentation/components/organisms/character-item'
import Sort from '@presentation/components/atoms/icons/sort'

const CharacterListSection = ({
  title,
  items,
  isFavorite = false,
  onToggleFavorite,
  heightClass,
  emptyText = 'No results',
  className = '',
  onSort,
}: CharacterListSectionProps) => {
  return (
    <section className={className}>
      <div className='flex items-center justify-between'>
        <Title count={items.length} tag='h3' text={title} />
        <button className='cursor-pointer' onClick={onSort}>
          <Sort />
        </button>
      </div>
      <div className={`${heightClass} overflow-y-auto scrollbar-none`}>
        {items.length === 0 ? (
          <p className='px-4 py-8 text-sm text-neutral-400'>{emptyText}</p>
        ) : (
          items.map(character => (
            <CharacterItem
              key={character.id}
              id={character.id}
              image={character.image}
              name={character.name}
              species={character.species}
              isFavorite={isFavorite}
              onToggleFavorite={() => onToggleFavorite?.(character)}
            />
          ))
        )}
      </div>
    </section>
  )
}

export default CharacterListSection
