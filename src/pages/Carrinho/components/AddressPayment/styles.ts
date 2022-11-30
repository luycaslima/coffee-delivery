import styled from 'styled-components'

const BaseBackgroundContainer = styled.div`
  background: ${(props) => props.theme['base-card']};
  border-radius: 6px;
  padding: 2.5rem;
`
export const FinishRequestContainer = styled.div`
  gap: 0.75rem;
  display: flex;
  flex-direction: column;
`
const HeaderContainer = styled.header`
  display: flex;
  align-items: top;
  gap: 0.5rem;
  margin-bottom: 2.75rem;
  h2 {
    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const AddressHeaderContainer = styled(HeaderContainer)`
  span {
    color: ${(props) => props.theme['yellow-dark']};
  }
`

export const PaymentHeaderContainer = styled(HeaderContainer)`
  span {
    color: ${(props) => props.theme['purple-dark']};
  }
`

export const AddressContainer = styled(BaseBackgroundContainer)``

export const PaymentMethodContainer = styled(BaseBackgroundContainer)``

export const AddresDataContainer = styled.main`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`
export const InputDataContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  font-size: 0.875rem;
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

export const PaymentInputContainer = styled.div`
  input[type='radio'] {
    opacity: 0;
    position: fixed;
    width: 0;
  }

  label {
    display: inline-block;
    background-color: ${(props) => props.theme['base-button']};
    font-size: 0.875rem;
    padding: 1rem;
    border: 2px solid transparent;
    border-radius: 4px;

    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Old versions of Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */
  }

  input[type='radio']:focus + label {
    border: 2px solid ${(props) => props.theme.purple};
    background-color: ${(props) => props.theme['purple-light']};
  }
  span {
    color: ${(props) => props.theme.purple};
  }
`
