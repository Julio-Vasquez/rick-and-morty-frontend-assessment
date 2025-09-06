import type { HeartProps } from './heart-type'

const Heart = ({ filled = false, size = 24, className = '', title }: HeartProps) => {
  const strokeWidth = filled ? undefined : 2
  const svgTint = filled ? 'text-secondary-600' : 'text-neutral-300'
  const pathClass = filled ? 'fill-current' : 'fill-none stroke-current'

  return (
    <svg
      viewBox='0 0 24 24'
      width={size}
      height={size}
      role='img'
      aria-hidden={!title}
      className={`${svgTint} ${className}`}
    >
      {title && <title>{title}</title>}
      <path
        className={pathClass}
        strokeWidth={strokeWidth}
        d='M12 21s-6.7-4.35-9.33-7.24A5.94 5.94 0 0 1 3 5.24 5.64 5.64 0 0 1 8.36 4 6.14 6.14 0 0 1 12 6.09 6.14 6.14 0 0 1 15.64 4 5.64 5.64 0 0 1 21 5.24a5.94 5.94 0 0 1 .33 8.52C18.7 16.65 12 21 12 21Z'
      />
    </svg>
  )
}

export default Heart
