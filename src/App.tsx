import { RouterProvider } from 'react-router'

import { router } from '@presentation/routes/routes'
import { ServicesProvider } from '@presentation/context/service'
import { FavoritesProvider } from '@presentation/context/favorites'

export const App = () => (
  <ServicesProvider>
    <FavoritesProvider>
      <RouterProvider router={router} />
    </FavoritesProvider>
  </ServicesProvider>
)

export default App
