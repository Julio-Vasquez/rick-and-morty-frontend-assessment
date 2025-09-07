import { type ButtonProps, VariantsButton } from './button-type'

const Button = ({
  className,
  onClick,
  text,
  variant = VariantsButton.primary,
  isDisabled,
}: ButtonProps) => {
  const baseStyles =
    'px-4 py-2 rounded-lg font-medium transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed'

  const variants = {
    [VariantsButton.primary]: 'bg-primary-600 text-white hover:bg-primary-700',
    [VariantsButton.secondary]: 'bg-gray-200 text-gray-700 hover:bg-gray-300',
  }

  return (
    <button
      disabled={isDisabled}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {text}
    </button>
  )
}

export default Button
