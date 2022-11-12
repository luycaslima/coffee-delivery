import styled from 'styled-components'

export const CafeContainer = styled.section`
  padding: 2rem 10rem;
  width: 100%;
  h2 {
    font-size: 2rem;
    color: ${(props) => props.theme['base-subtitle']};
  }
`
