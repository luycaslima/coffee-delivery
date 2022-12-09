import { Address } from './components/Address'
import { Payment } from './components/Payment'
import { FinishRequestContainer } from './styles'

export default function AddressPayment() {
  return (
    <FinishRequestContainer>
      <h2>Complete seu pedido</h2>
      <Address />
      <Payment />
    </FinishRequestContainer>
  )
}
