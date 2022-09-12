import styled from 'styled-components'

export const Container = styled.div``

export const SectionContainer = styled.section`
  padding-top: 2.5rem;
  display: flex;
  justify-content: space-between;

  img {
    float: left;
    max-width: 50%;
    align-items: baseline;
  }
`

export const TitleContainer = styled.div`
  max-width: 100%;

  h1 {
    font-family: 'Baloo 2', cursive;
    font-weight: 800;
    font-size: 3rem;
    line-height: 1.3;
    color: ${(props) => props.theme.baseTheme.title};
    padding-bottom: 1rem;
  }
  span {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1.15rem;
    line-height: 1.3;
    display: flex;
  }
`

export const ItensContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding-top: 5rem;
  row-gap: 1rem;
  max-width: 100%;
  img {
    width: 2rem;
  }
  p {
    color: ${(props) => props.theme.baseTheme.subtitle};
    display: flex;
    align-items: center;
    gap: 0.75rem;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.3;
  }
`
