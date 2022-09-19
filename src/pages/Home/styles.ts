import styled from 'styled-components'

export const ContainerSection = styled.section`
  display: flex;
  justify-content: space-between;
  padding-top: 4.875rem;

  @media (max-width: 1086px) {
    align-items: center;
    flex-direction: column;
    padding-top: 0.5rem;
    img {
      order: -1;
      padding-bottom: 2rem;
    }
  }

  @media (max-width: 545px) {
    img {
      width: 25rem;
      height: 18rem;
    }
  }

  @media (max-width: 426px) {
    img {
      width: 23rem;
      height: 16rem;
    }
  }

  /* img {
    width: auto;
    height: 22.5rem;
  } */

  div {
    h1 {
      color: ${(props) => props.theme.baseTheme.title};
      font-size: 3rem;
      font-family: 'Baloo 2';
      font-weight: 800;
      line-height: 130%;
    }

    > p {
      color: ${(props) => props.theme.baseTheme.subtitle};
      font-size: 1.25rem;
      font-family: 'Roboto';
      font-weight: 400;
      line-height: 130%;
      width: 85%;
      padding: 1rem 0 4.125rem 0;
    }

    ul {
      list-style: none;
      display: grid;
      grid-template-columns: 50% 50%;

      li {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        padding-top: 1.25rem;

        p {
          color: ${(props) => props.theme.baseTheme.text};
          font-size: 1rem;
          font-family: 'Roboto';
          font-weight: 400;
          line-height: 130%;
        }
      }
    }
  }
`

export const BaseStyleSpan = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  gap: 0.5rem;
  border-radius: 1000px;
  width: 2rem;
  height: 2rem;
`
export const CartIcon = styled(BaseStyleSpan)`
  background-color: ${(props) => props.theme.productTheme['yellow-dark']};
`
export const TimerIcon = styled(BaseStyleSpan)`
  background-color: ${(props) => props.theme.productTheme.yellow};
`
export const PackingIcon = styled(BaseStyleSpan)`
  background-color: ${(props) => props.theme.baseTheme.text};
`
export const CoffeetIcon = styled(BaseStyleSpan)`
  background-color: ${(props) => props.theme.productTheme.purple};
`

export const ContainerMain = styled.main`
  margin-top: 5.875rem;

  margin-bottom: 5.875rem;

  article {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(14rem, 15rem));
    row-gap: 2.5rem;
    column-gap: 2rem;
    justify-content: center;

    @media (max-width: 560px) {
      grid-template-columns: repeat(auto-fit, minmax(14rem, 18rem));
      justify-content: center;
    }
  }

  h3 {
    color: ${(props) => props.theme.baseTheme.title};
    font-size: 2rem;
    font-family: 'Baloo 2';
    font-weight: 800;
    line-height: 130%;

    margin-bottom: 3.375rem;
  }
`
