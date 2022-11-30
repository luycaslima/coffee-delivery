import { Bank, CreditCard, CurrencyDollar, MapPin, Money } from 'phosphor-react'
import {
  AddresDataContainer,
  AddressContainer,
  MediumInputContainer,
  FinishRequestContainer,
  InputContainer,
  PaymentMethodContainer,
  AddressHeaderContainer,
  PaymentHeaderContainer,
  InputDataContainer,
  SmallInputContainer,
  PaymentInputContainer,
} from './styles'

// TODO separar isso em componentes

export default function AddressPayment() {
  return (
    <FinishRequestContainer>
      <h2>Complete seu pedido</h2>
      <AddressContainer>
        <AddressHeaderContainer>
          <span>
            <MapPin size={22} />
          </span>
          <main>
            <h2>Endereço de entrega</h2>
            <p>Informe o endereço onde deseja receber seu pedido</p>
          </main>
        </AddressHeaderContainer>
        <AddresDataContainer>
          <MediumInputContainer type="text" placeholder="CEP" maxLength={8} />
          <InputContainer type="text" placeholder="Rua" />

          <InputDataContainer>
            <MediumInputContainer type="text" placeholder="Número" />
            <InputContainer type="text" placeholder="Complemento" />
          </InputDataContainer>

          <InputDataContainer>
            <MediumInputContainer type="text" placeholder="Bairro" />
            <InputContainer type="text" placeholder="Cidade" />
            <SmallInputContainer type="text" placeholder="UF" maxLength={2} />
          </InputDataContainer>
        </AddresDataContainer>
      </AddressContainer>
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
    </FinishRequestContainer>
  )
}

// https://markheath.net/post/customize-radio-button-css
