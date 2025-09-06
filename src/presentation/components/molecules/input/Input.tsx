import type { InputFieldProps } from './input-type'

const InputField = ({ leftIcon, rightIcon, ...props }: InputFieldProps) => {
  return (
    <div className='flex items-center w-full bg-[#f3f4f6] rounded-xl px-3 py-1 shadow-sm'>
      {leftIcon && <span className='mr-2'>{leftIcon}</span>}
      <input
        {...props}
        className='flex-1 bg-transparent outline-none text-sm text-neutral-700 placeholder:text-neutral-400 placeholder:text-[16px]'
      />
      {rightIcon && (
        <button className='ml-2 cursor-pointer rounded-xl hover:bg-primary-100 '>
          {rightIcon}
        </button>
      )}
    </div>
  )
}

export default InputField
