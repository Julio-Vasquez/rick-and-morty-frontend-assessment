import ArrowLeft from '@presentation/components/atoms/icons/arrow-left'
import type { BackButtonProps } from './back-button-type'

const BackButton = ({ label, onClick, className }: BackButtonProps) => {
  return (
    <div className='md:hidden sticky top-0 z-10 bg-white/80 backdrop-blur '>
      <div className='px-4 py-3'>
        <button
          type='button'
          onClick={onClick}
          aria-label='Volver a la lista'
          className={`inline-flex items-center gap-2 rounded-xl px-2 py-1 hover:bg-neutral-100 cursor-pointer ${className}`}
          data-testid='back-button'
        >
          <ArrowLeft />
          <span className='text-sm font-medium'>{label}</span>
        </button>{' '}
      </div>
    </div>
  )
}

export default BackButton
