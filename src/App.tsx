import Layout from '@presentation/components/templates/Layout'
import { ServicesProvider } from '@presentation/context/service'
import CharacterDetailsCard from '@presentation/components/organisms/character-detail-card'
import Home from '@presentation/pages/Home'

export const App = () => (
  <ServicesProvider>
    <Layout>
      <Home />
      <CharacterDetailsCard
        name='julio alfredo vasquez lievano'
        species='Human'
        occupation='coding'
        status='Alive'
        gender='Male'
        isFavorite={true}
        image='https://i.ytimg.com/vi/vH8kYVahdrU/maxresdefault.jpg'
      />
    </Layout>
  </ServicesProvider>
)

export default App
