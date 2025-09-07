import Layout from '@presentation/components/templates/Layout'
import { PATHS } from '@presentation/constants/routes'
import type { RouteObject } from 'react-router'
import { createBrowserRouter, Navigate } from 'react-router'

const routes: RouteObject[] = [
  {
    element: <Layout />,
    children: [
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
      { path: '*', element: <Navigate to={PATHS.home} replace /> },
    ],
  },
]

export const router = createBrowserRouter(routes)

export default router
