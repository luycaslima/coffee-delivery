import styled from 'styled-components'

export const IntroContainer = styled.section`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(160px);

  width: 100%;
  margin: auto;
  gap: 4rem;
  padding: 5.75rem 10rem;
`

export const IntroTextContainer = styled.div`
  h1 {
    font-size: 3rem;
    line-height: 130%;
    padding-bottom: 1rem;
    color: ${(props) => props.theme['base-title']};
  }
  table {
    padding-top: 4.125rem;
  }
  span {
    font-weight: normal;
    font-size: 1.25rem;
  }
`

export const BackgroundContainer = styled.div`
  position: absolute;
  overflow: hidden;
  filter: blur(30px);
  width: 100%;
`
