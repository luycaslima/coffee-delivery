import AddressPayment from './components/AddressPayment'
import Checkout from './components/Checkout'
import { CarrinhoContainer } from './styles'

export default function Carrinho() {
  return (
    <CarrinhoContainer>
      <AddressPayment />
      <Checkout />
    </CarrinhoContainer>
  )
}
