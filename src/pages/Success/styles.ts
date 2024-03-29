import styled from 'styled-components'

export const ContainerMain = styled.main`
  img {
    display: flex;
    align-self: flex-end;
    width: auto;

    @media (max-width: 1055px) {
      width: 25rem;
    }

    @media (max-width: 960px) {
      width: 20rem;
    }

    @media (max-width: 880px) {
      width: 30rem;
      align-self: baseline;
      order: -1;
      margin-top: 2rem;
    }

    @media (max-width: 620px) {
      width: 25rem;
    }

    @media (max-width: 440px) {
      width: 20rem;
    }
  }

  h1 {
    font-family: 'Baloo 2';
    font-weight: 800;
    font-size: 2rem;
    line-height: 130%;
    color: ${(props) => props.theme.productTheme['yellow-dark']};
  }

  p {
    font-size: 1.25rem;
    color: ${(props) => props.theme.baseTheme.subtitle};
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 880px) {
      flex-direction: column;
      align-items: center;
    }

    ul {
      width: auto;
      display: flex;
      flex-direction: column;
      gap: 2rem;
      margin-top: 5rem;
      padding: 2.5rem;

      border-width: 1px;
      border-radius: 6px 36px;
      border-style: solid;
      background: linear-gradient(#fafafa, #fafafa) padding-box,
        linear-gradient(90deg, #dbac2c, #8047f8) border-box;
      border-color: transparent;

      @media (max-width: 880px) {
        margin-top: 1rem;
      }

      li:nth-child(2) {
        span {
          font-weight: 700;
          display: flex;
          flex-direction: column;
        }
      }

      li:nth-child(3) {
        span {
          font-weight: 700;
          display: flex;
          flex-direction: column;
        }
      }

      li {
        display: flex;
        gap: 0.75rem;

        p {
          font-size: 1rem;
          color: ${(props) => props.theme.baseTheme.text};
          span {
            font-weight: 700;
          }
        }
      }
    }
  }
`

export const BaseIcon = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  gap: 0.5rem;
  width: 2rem;
  height: 2rem;
  border-radius: 1000px;
`

export const Locale = styled(BaseIcon)`
  background: ${(props) => props.theme.productTheme.purple};
`
export const Delivery = styled(BaseIcon)`
  background: ${(props) => props.theme.productTheme.yellow};
`
export const Payment = styled(BaseIcon)`
  background: ${(props) => props.theme.productTheme['yellow-dark']};
`
