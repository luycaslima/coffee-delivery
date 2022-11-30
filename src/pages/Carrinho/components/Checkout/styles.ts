import styled from 'styled-components'

const BaseBackgroundContainer = styled.div`
  background: ${(props) => props.theme['base-card']};
  border-radius: 6px;
  padding: 2.5rem;
`
export const SelectedCoffeesContainer = styled(BaseBackgroundContainer)`
  border-radius: 6px 36px 6px 36px;
  background: ${(props) => props.theme['base-card']};
  padding: 2.5rem;
`
