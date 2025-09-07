import { useState } from 'react'

import Button from '@presentation/components/atoms/button/Button'
import FilterOption from '@presentation/components/atoms/filter-option'
import FilterGroup from '@presentation/components/molecules/filter-group'

interface FilterContentProps {
  onClose?: () => void
}

const FilterContent = ({ onClose }: FilterContentProps) => {
  const [character, setCharacter] = useState('All')
  const [specie, setSpecie] = useState('All')

  const handleFilter = () => {
    console.log({ character, specie })
    if (onClose) onClose()
  }

  return (
    <div className='flex flex-col h-full gap-4'>
      <FilterGroup title='Characters'>
        <div className='grid grid-cols-3 gap-2 w-full'>
          {['All', 'Starred', 'Others'].map(option => (
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
          {['All', 'Human', 'Alien'].map(option => (
            <FilterOption
              key={option}
              label={option}
              selected={specie === option}
              onSelect={() => setSpecie(option)}
            />
          ))}
        </div>
      </FilterGroup>
      <div className='mt-auto'>
        <Button onClick={handleFilter} className='w-full' text='Filter' />
      </div>
    </div>
  )
}
export default FilterContent
