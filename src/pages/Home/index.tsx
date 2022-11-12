import Cafes from './components/Cafes'
import { Intro } from './components/Intro'
import { HomeContainer } from './styles'
export default function Home() {
  return (
    <HomeContainer>
      <Intro />
      <Cafes />
    </HomeContainer>
  )
}
