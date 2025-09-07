import type { FilterOptionProps } from './filter-option-type'

const FilterOption = ({ label, selected, onSelect }: FilterOptionProps) => {
  return (
    <button
      onClick={onSelect}
      className={`px-2 py-2 rounded-lg border transition-colors duration-200 ${
        selected
          ? 'bg-purple-100 text-purple-600 border-purple-400'
          : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'
      }`}
    >
      {label}
    </button>
  )
}

export default FilterOption
