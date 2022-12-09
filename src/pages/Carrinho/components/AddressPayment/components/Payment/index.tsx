import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react'
import {
  PaymentHeaderContainer,
  PaymentInputContainer,
  PaymentMethodContainer,
} from './styles'

import { InputDataContainer } from '../../styles'

export function Payment() {
  return (
    <PaymentMethodContainer>
      <PaymentHeaderContainer>
        <span>
          <CurrencyDollar size={22} />
        </span>
        <main>
          <h2>Pagamento</h2>
          <p>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </p>
        </main>
      </PaymentHeaderContainer>
      <InputDataContainer>
        <PaymentInputContainer>
          <input type="radio" id="credito" name="Paymethod" />
          <label htmlFor="credito">
            <span>
              <CreditCard size={18} />
            </span>
            CARTÃO DE CRÉDITO
          </label>
        </PaymentInputContainer>
        <PaymentInputContainer>
          <input type="radio" id="debito" name="Paymethod" />
          <label htmlFor="debito">
            <span>
              <Bank size={18} />
            </span>
            CARTÃO DE DÉBITO
          </label>
        </PaymentInputContainer>
        <PaymentInputContainer>
          <input type="radio" id="dinheiro" name="Paymethod" />
          <label htmlFor="dinheiro">
            <span>
              <Money size={18} />
            </span>
            DINHEIRO
          </label>
        </PaymentInputContainer>
      </InputDataContainer>
    </PaymentMethodContainer>
  )
}
