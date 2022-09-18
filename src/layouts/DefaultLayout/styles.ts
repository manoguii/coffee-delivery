import styled from 'styled-components'

export const DefaultLayoutContainer = styled.div`
  max-width: 90rem;
  margin: 0 auto;
  padding: 0 5rem;

  @media (max-width: 760px) {
    padding: 0 3rem;
  }

  @media (max-width: 660px) {
    padding: 0 1.5rem;
  }

  @media (max-width: 460px) {
    padding: 0 0.8rem;
  }
`
