import FilterContent from '../filter-content/FilterContent'

interface FilterPopupProps {
  onClose: () => void
}

const FilterPopup = ({ onClose }: FilterPopupProps) => {
  return (
    <div className='p-4 bg-white rounded-2xl shadow-lg w-72'>
      <FilterContent onClose={onClose} />
    </div>
  )
}
export default FilterPopup
