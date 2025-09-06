import { SIZE_MAP, WEIGHT_MAP } from '@presentation/constants/class-map'

export interface TextProps {
  children: React.ReactNode
  size?: keyof typeof SIZE_MAP
  weight?: keyof typeof WEIGHT_MAP
  className?: string
  tag?: 'p' | 'span'
}
