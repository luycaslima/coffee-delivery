import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  flew-direction: row;
  justify-content: space-between;

  overflow: hidden;
  padding: 2rem 10rem;
  top: 0;
  position: fixed;
  z-index: 1;
  backdrop-filter: blur(15px);
  width: 100%;

  nav {
    display: flex;
    gap: 0.75rem;
  }
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    color: ${(props) => props.theme['yellow-dark']};
  }
`

export const CarrinhoButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  padding: 0.5rem;
  margin: 0;
  background: ${(props) => props.theme['yellow-light']};
`

export const LocationSpan = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
  color: ${(props) => props.theme.purple};
  border-radius: 6px;
  padding: 0 0.5rem;
  font-size: 0.875rem;
  background: ${(props) => props.theme['purple-light']};
`
