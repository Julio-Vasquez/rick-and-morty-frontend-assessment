import FilterContent from '../filter-content/FilterContent'
import type { FilterDrawerProps } from './filter-drawer-type'

const FilterDrawer = ({ onClose, refetch }: FilterDrawerProps) => {
  return (
    <>
      <div
        className='fixed inset-0 bg-black/40'
        onClick={onClose}
        aria-hidden='true'
      />

      <div
        className='
          fixed inset-x-0 bottom-0
          top-[max(env(safe-area-inset-top),16px)]
          bg-white rounded-t-3xl shadow-xl
          flex flex-col
        '
        role='dialog'
        aria-modal='true'
        aria-label='Filters'
      >
        <div className='relative h-12 flex items-center'>
          <button
            onClick={onClose}
            className='absolute left-4 text-purple-600'
            aria-label='Go back'
          >
            &#8592;
          </button>
          <h2 className='mx-auto text-lg font-semibold'>Filters</h2>
        </div>

        <div className='flex-1 overflow-y-auto p-4'>
          <FilterContent onClose={onClose} refetch={refetch} />
        </div>
      </div>
    </>
  )
}

export default FilterDrawer
