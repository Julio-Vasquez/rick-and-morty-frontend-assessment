import Title from '@presentation/components/atoms/title/Title'
import type { CharacterListSectionProps } from './character-list-type'
import CharacterItem from '@presentation/components/organisms/character-item'

const CharacterListSection = ({
  title,
  items,
  isFavorite = false,
  onToggleFavorite,
  heightClass = 'max-h-[33.333dvh]',
  emptyText = 'No results',
  className = '',
}: CharacterListSectionProps) => {
  return (
    <section className={className}>
      <Title count={items.length} tag='h3' text={title} />

      <div className={`${heightClass} overflow-y-auto scrollbar-none`}>
        {items.length === 0 ? (
          <p className='px-4 py-8 text-sm text-neutral-400'>{emptyText}</p>
        ) : (
          items.map(character => (
            <CharacterItem
              key={character.id}
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
