import { useState } from 'react'

import FilterDrawer from '@presentation/components/organisms/filter-drawer'
import FilterPopup from '@presentation/components/organisms/filter-popup'

import type { InputFieldProps } from './input-type'

const InputField = ({ leftIcon, rightIcon, ...props }: InputFieldProps) => {
  const [open, setOpen] = useState(false)

  return (
    <div className='flex items-center w-full bg-[#f3f4f6] rounded-xl px-3 py-1 shadow-sm'>
      {leftIcon && <span className='mr-2'>{leftIcon}</span>}
      <input
        {...props}
        className='flex-1 bg-transparent outline-none text-sm text-neutral-700 placeholder:text-neutral-400 placeholder:text-[16px]'
      />
      {rightIcon && (
        <button
          className='ml-2 cursor-pointer rounded-xl hover:bg-primary-100 '
          onClick={() => setOpen(!open)}
        >
          {rightIcon}
        </button>
      )}
      {open && (
        <>
          <div className='block md:hidden'>
            <FilterDrawer onClose={() => setOpen(false)} />
          </div>
          <div className='hidden md:block absolute mt-2 top-28 left-5 z-10'>
            <FilterPopup onClose={() => setOpen(false)} />
          </div>
        </>
      )}
    </div>
  )
}

export default InputField
