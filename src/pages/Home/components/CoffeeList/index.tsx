import CoffeeCard from '../CoffeeCard'
import { CoffeeContainer, CoffeeMenuContainer } from './styles'

/* type CoffeeTag =
  | 'Tradicional'
  | 'Gelado'
  | 'Especial'
  | 'Alcóolico'
  | 'Com leite'

interface CoffeeData {
  name: string
  price: number
  description: string
  image: string
  tags: Array<CoffeeTag>
}
 */

export default function CoffeeList() {
  return (
    <CoffeeContainer>
      <h2>Nossos cafés</h2>
      <CoffeeMenuContainer>
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
      </CoffeeMenuContainer>
    </CoffeeContainer>
  )
}
