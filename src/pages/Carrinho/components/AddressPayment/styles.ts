import styled from 'styled-components'

export const BaseBackgroundContainer = styled.div`
  background: ${(props) => props.theme['base-card']};
  border-radius: 6px;
  padding: 2.5rem;
`
export const FinishRequestContainer = styled.div`
  gap: 0.75rem;
  display: flex;
  flex-direction: column;
`
export const HeaderContainer = styled.header`
  display: flex;
  align-items: top;
  gap: 0.5rem;
  margin-bottom: 2.75rem;
  h2 {
    color: ${(props) => props.theme['base-subtitle']};
  }
`
export const InputDataContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  font-size: 0.875rem;
`
