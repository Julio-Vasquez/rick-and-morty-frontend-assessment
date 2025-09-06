import type { TextProps } from './text-type'
import { SIZE_MAP, WEIGHT_MAP } from '@presentation/constants/class-map'

const Text = ({
  children,
  className = '',
  size = 'm',
  tag = 'p',
  weight = 'normal',
}: TextProps) => {
  const computedClassName = `${SIZE_MAP[size]} ${WEIGHT_MAP[weight]} ${className}`
  const Tag = tag
  return <Tag className={computedClassName}>{children}</Tag>
}

export default Text
