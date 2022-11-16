import CoffeeList from './components/CoffeeList'
import Intro from './components/Intro'
import { HomeContainer } from './styles'
export default function Home() {
  return (
    <HomeContainer>
      <Intro />
      <CoffeeList />
    </HomeContainer>
  )
}
