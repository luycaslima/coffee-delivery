import styled from 'styled-components'

export const CoffeeContainer = styled.section`
  margin: auto;
  width: 100%;

  padding: 2rem 10rem;

  h2 {
    font-size: 2rem;
    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const CoffeeMenuContainer = styled.div`
  padding: 3.375rem 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(256px, 1fr));
  grid-gap: 3rem 2rem;
`
