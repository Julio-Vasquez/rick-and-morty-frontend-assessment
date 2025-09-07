import { useState } from 'react'

import Button from '@presentation/components/atoms/button/Button'
import FilterOption from '@presentation/components/atoms/filter-option'
import FilterGroup from '@presentation/components/molecules/filter-group'
import type { Character, FilterContentProps, Specie } from './filter-content-type'
import { FILTERS_CHARACTERS, FILTERS_SPECIE } from '@presentation/constants/filters'

const FilterContent = ({ onClose, refetch }: FilterContentProps) => {
  const [species, setSpecies] = useState<Specie>('All')
  const [character, setCharacter] = useState<Character>('All')

  const handleFilter = () => {
    refetch({ species })
    onClose()
  }

  const isDisabledButton = character === 'All' && species === 'All'

  return (
    <div className='flex flex-col h-full gap-4'>
      <FilterGroup title='Characters'>
        <div className='grid grid-cols-3 gap-2 w-full'>
          {FILTERS_CHARACTERS.map(option => (
            <FilterOption
              key={option}
              label={option}
              selected={character === option}
              onSelect={() => setCharacter(option)}
            />
          ))}
        </div>
      </FilterGroup>

      <FilterGroup title='Specie'>
        <div className='grid grid-cols-3 gap-2 w-full'>
          {FILTERS_SPECIE.map(option => (
            <FilterOption
              key={option}
              label={option}
              selected={species === option}
              onSelect={() => setSpecies(option)}
            />
          ))}
        </div>
      </FilterGroup>
      <div className='mt-auto'>
        <Button
          onClick={handleFilter}
          className='w-full'
          text='Filter'
          isDisabled={isDisabledButton}
        />
      </div>
    </div>
  )
}
export default FilterContent
