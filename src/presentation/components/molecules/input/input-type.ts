import type { InputHTMLAttributes } from 'react'
import type { CharacterListParams } from '@domain/types/character-list-params'
export interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  /** Optional left icon */
  leftIcon: React.ReactNode
  /** Optional right icon */
  rightIcon: React.ReactNode

  refetch: (params?: CharacterListParams) => Promise<void>
}
