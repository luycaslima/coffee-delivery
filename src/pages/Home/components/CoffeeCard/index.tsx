import { ShoppingCart } from 'phosphor-react'
import {
  BuyOptionsContainer,
  CardContainer,
  CardFooterContainer,
  CardTagsContainer,
  NumberOfCoffesInput,
  PriceContainer,
} from './styles'
import Arabe from '../../../../assets/coffees/arabe.png'

export default function CoffeeCard() {
  // TODO mudar o id do input de acordo com nome passado do café
  return (
    <CardContainer>
      <img src={Arabe} alt="Coffee's image" />
      <CardTagsContainer>
        <span>TRADICIONAL</span>
        <span>GELADO</span>
      </CardTagsContainer>
      <h1>Nome do Café</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <CardFooterContainer>
        <PriceContainer>
          R$ <span>9,90</span>
        </PriceContainer>
        <BuyOptionsContainer>
          <NumberOfCoffesInput
            type="number"
            id="coffeeAmount"
            placeholder="0"
            step={1}
            min={0}
          />
          <button>
            <ShoppingCart size={22} weight="fill" />
          </button>
        </BuyOptionsContainer>
      </CardFooterContainer>
    </CardContainer>
  )
}
