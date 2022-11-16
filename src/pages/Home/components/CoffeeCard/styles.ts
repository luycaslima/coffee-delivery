import styled from 'styled-components'

export const CardContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  text-align: center;
  padding: 1.25rem;
  border-radius: 6px 36px 6px 36px;
  background: ${(props) => props.theme['base-card']};
  min-height: 310px;
  max-width: 256px;
  /* TODO descobrir como fz crescer proprocionalmente nesse formato */
  h1 {
    color: ${(props) => props.theme['base-subtitle']};
    padding-bottom: 0.5rem;
  }
  p {
    color: ${(props) => props.theme['base-label']};
    margin-bottom: 1.5rem;
  }
  img {
    margin-top: -60px;
  }
`
export const CardTagsContainer = styled.div`
  display: flex;
  padding: 0.75rem 0 1rem 0;
  gap: 0.25rem;

  span {
    border-radius: 100px;
    padding: 0.25rem 0.5rem;
    font-weight: bold;
    font-size: 0.75rem;
    background: ${(props) => props.theme['yellow-light']};
    color: ${(props) => props.theme['yellow-dark']};
  }
`

export const CardFooterContainer = styled.footer`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  p {
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  button {
    border-radius: 6px;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;
    color: ${(props) => props.theme.white};
    background: ${(props) => props.theme['purple-dark']};
    transition: 0.3s;
    &:hover {
      background: ${(props) => props.theme.purple};
    }
  }
`
// TODO Para fazer parecido com o do figma https://stackblitz.com/edit/angular-ivy-plus-minus?file=src%2Fapp%2Fapp.component.css
export const InputWrapper = styled.div`
  display: flex;
`

export const NumberOfCoffesInput = styled.input`
  width: 4.5rem;
  border: none;
  border-radius: 6px;
  text-align: center;
`
export const InputButtons = styled.button``

export const PriceContainer = styled.div`
  span {
    font-family: 'Baloo 2', sans-serif;
    font-weight: bold;
    font-size: 1.5rem;
    color: ${(props) => props.theme['base-text']};
  }
`
export const BuyOptionsContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`
