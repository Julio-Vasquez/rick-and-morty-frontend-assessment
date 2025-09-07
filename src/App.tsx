import { RouterProvider } from 'react-router'

import { router } from '@presentation/routes/routes'
import Layout from '@presentation/components/templates/Layout'
import { ServicesProvider } from '@presentation/context/service'
import { FavoritesProvider } from '@presentation/context/favorites'

export const App = () => (
  <ServicesProvider>
    <FavoritesProvider>
      <Layout>
        <RouterProvider router={router} />
      </Layout>
    </FavoritesProvider>
  </ServicesProvider>
)

export default App
