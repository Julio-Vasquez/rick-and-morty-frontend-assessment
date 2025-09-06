import { useContext } from 'react'

import { ServicesContext, type Services } from '@presentation/context/service'

export const useServices = (): Services => {
  const context = useContext(ServicesContext)

  if (!context) throw new Error('ServicesContext not found')

  return context
}
