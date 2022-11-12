import styled from 'styled-components'

export const IconTopicContainer = styled.div`
  gap: 0.75rem;
  padding: 0.5rem 1rem 0.5rem 0;
  display: flex;
  align-items: center;
  font-family: 'Roboto', sans-serif;
  font-weight: normal;
`

export const IconContainer = styled.div`
  max-height: 2rem;
  max-width: 2rem;
  padding: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.white};
  background: ${(props) => props.color}; /* TODO RESOLVER ISSO COM TYPESCRIPT */
  border-radius: 32px;
`
