import { PATHS } from '@presentation/constants/routes'
import type { RouteObject } from 'react-router'
import { createBrowserRouter, Navigate } from 'react-router'

const routes: RouteObject[] = [
  {
    path: PATHS.home,
    lazy: async () => ({
      Component: (await import('@presentation/pages/Home')).default,
    }),
  },
  {
    path: PATHS.character,
    children: [
      { index: true, element: <Navigate to='/' replace /> },
      {
        path: ':id',
        lazy: async () => ({
          Component: (await import('@presentation/pages/Character')).default,
        }),
      },
    ],
  },
]

export const router = createBrowserRouter(routes)

export default router
