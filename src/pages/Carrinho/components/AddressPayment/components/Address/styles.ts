import styled from 'styled-components'
import { BaseBackgroundContainer, HeaderContainer } from '../../styles'

export const AddressContainer = styled(BaseBackgroundContainer)``

export const AddresDataContainer = styled.main`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const AddressHeaderContainer = styled(HeaderContainer)`
  span {
    color: ${(props) => props.theme['yellow-dark']};
  }
`

export const InputContainer = styled.input`
  border: 2px solid ${(props) => props.theme['base-button']};
  height: 42px;
  background: ${(props) => props.theme['base-input']};
  border-radius: 6px;
  padding: 0.5rem;
  flex: 1;

  &::placeholder {
    font-size: 0.875rem;
  }
`

export const MediumInputContainer = styled(InputContainer)`
  max-width: 200px;
`
export const SmallInputContainer = styled(InputContainer)`
  max-width: 60px;
`
