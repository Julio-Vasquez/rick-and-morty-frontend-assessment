import { createContext } from 'react'

import type { Services } from './service-type'

export const ServicesContext = createContext<Services | null>(null)
