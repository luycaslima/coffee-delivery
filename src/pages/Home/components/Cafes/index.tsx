import Card from '../Card'
import { CafeContainer } from './styles'

export default function Cafes() {
  return (
    <CafeContainer>
      <h2>Nossos cafés</h2>
      <div>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </CafeContainer>
  )
}
