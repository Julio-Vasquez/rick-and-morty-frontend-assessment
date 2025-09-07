import FilterContent from '../filter-content/FilterContent'
import type { FilterPopupProps } from './filter-popup-type'

const FilterPopup = ({ onClose, refetch }: FilterPopupProps) => {
  return (
    <div className='p-4 bg-white rounded-2xl shadow-lg w-72'>
      <FilterContent onClose={onClose} refetch={refetch} />
    </div>
  )
}
export default FilterPopup
