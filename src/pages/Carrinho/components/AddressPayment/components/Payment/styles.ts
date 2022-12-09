import styled from 'styled-components'

import { HeaderContainer, BaseBackgroundContainer } from '../../styles'

export const PaymentHeaderContainer = styled(HeaderContainer)`
  span {
    color: ${(props) => props.theme['purple-dark']};
  }
`

export const PaymentMethodContainer = styled(BaseBackgroundContainer)``

export const PaymentInputContainer = styled.div`
  input[type='radio'] {
    opacity: 0;
    position: fixed;
    width: 0;
  }

  label {
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.875rem;

    background-color: ${(props) => props.theme['base-button']};
    font-size: 0.875rem;
    border: 2px solid transparent;
    border-radius: 4px;
    padding: 1rem;

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
