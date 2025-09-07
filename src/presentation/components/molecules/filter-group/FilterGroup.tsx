import type { FilterGroupProps } from './filter-group-type'

const FilterGroup = ({ title, children }: FilterGroupProps) => (
  <div className='flex flex-col gap-2'>
    <h3 className='text-gray-500 text-sm font-medium'>{title}</h3>
    <div className='flex gap-2 flex-wrap justify-around'>{children}</div>
  </div>
)

export default FilterGroup
