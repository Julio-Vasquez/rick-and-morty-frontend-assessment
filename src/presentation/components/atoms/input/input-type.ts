import type { InputHTMLAttributes } from 'react'

export interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  /** Optional left icon */
  leftIcon: React.ReactNode
  /** Optional right icon */
  rightIcon: React.ReactNode
}
