import { MapPin } from 'phosphor-react'
import {
  AddressHeaderContainer,
  AddressContainer,
  AddresDataContainer,
  MediumInputContainer,
  InputContainer,
  SmallInputContainer,
} from './styles'

import { InputDataContainer } from '../../styles'

// TODO checar se oq foi preenchido pra ser número é numero e impedir a operação

export function Address() {
  return (
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
  )
}
