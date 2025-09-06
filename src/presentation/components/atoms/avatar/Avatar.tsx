import type { AvatarProps } from './avatar-type'

const Avatar = ({ src, alt, size = 75, className = '' }: AvatarProps) => {
  const computedClassName = `rounded-full object-cover ${className}`

  return (
    <img
      width={size}
      height={size}
      src={src}
      alt={alt}
      className={computedClassName}
    />
  )
}
export default Avatar
