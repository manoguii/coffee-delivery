import styled from 'styled-components'

export const ContainerSection = styled.section`
  display: flex;
  justify-content: space-between;
  padding-top: 4.875rem;

  img {
    width: 29.135rem;
    height: 22.5rem;
  }

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
