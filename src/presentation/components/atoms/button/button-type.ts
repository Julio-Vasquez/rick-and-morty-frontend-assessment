export enum VariantsButton {
  primary = 'primary',
  secondary = 'secondary',
}

export interface ButtonProps {
  text: string
  onClick?: () => void
  className?: string
  variant?: VariantsButton
  isDisabled: boolean
}
