import styled from 'styled-components'

export const DeliveryFree = styled.span`
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 130%;
  color: ${(props) => props.theme.productTheme['delivery-free']};
`

export const ContainerMain = styled.main`
  display: grid;
  grid-template-columns: 60% 37%;
  grid-gap: 2rem;
  margin-bottom: 5rem;

  @media (max-width: 1200px) {
    grid-template-columns: 1fr;
  }

  @media (max-width: 620px) {
    display: flex;
    flex-direction: column;
  }
`

export const CompleteYourOrder = styled.div`
  h3 {
    font-family: 'Baloo 2';
    font-weight: 700;
    font-size: 1.125rem;
    line-height: 130%;
    color: ${(props) => props.theme.baseTheme.subtitle};
    margin-bottom: 1rem;
  }

  form {
    @media (max-width: 1200px) {
      display: grid;
      grid-template-rows: 1fr;
      grid-template-columns: 50% 50%;
      grid-gap: 1rem;

      > header {
        grid-row: 1;
        grid-column: 1/3;
        padding: 2rem;
      }

      section {
        grid-column: 1;
      }

      footer {
        grid-column: 2;
        margin-top: 0;
      }
    }

    @media (max-width: 999px) {
      display: flex;
      flex-direction: column;

      footer {
        margin-top: 2rem;
      }
    }

    width: auto;

    @media (max-width: 605px) {
      padding: 0;
    }

    input:focus {
      outline: 0;
      box-shadow: 0 0 0 2px
        ${(props) => props.theme.productTheme['yellow-dark']};

      color: ${(props) => props.theme.baseTheme.text};
    }

    section {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      padding-top: 2rem;
      background: ${(props) => props.theme.baseTheme.card};
      border-radius: 6px;
      padding: 2.5rem;

      > header {
        display: flex;
        align-items: flex-start;
        gap: 0.5rem;

        div {
          display: flex;
          flex-direction: column;
          gap: 0;
        }
      }

      div {
        display: flex;
        gap: 0.75rem;
        flex-wrap: nowrap;
      }

      div:nth-child(4) {
        flex-wrap: wrap;
      }

      @media (max-width: 1190px) {
        div {
          display: grid;
          grid-template-columns: 50% 50%;
        }
      }

      @media (max-width: 605px) {
        padding: 1.8rem;
      }

      @media (max-width: 505px) {
        padding: 1.5rem;
      }

      @media (max-width: 405px) {
        padding: 1rem;
      }

      h4 {
        font-weight: 400;
        font-size: 1rem;
        line-height: 130%;
        color: ${(props) => props.theme.baseTheme.subtitle};
      }

      p {
        font-weight: 400;
        font-size: 0.875rem;
        line-height: 130%;
        color: ${(props) => props.theme.baseTheme.text};
      }

      button {
        margin-top: 1.25rem;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 0.75rem 0.5rem;
        gap: 0.25rem;
        background: ${(props) => props.theme.productTheme['yellow-dark']};
        border-radius: 6px;
        border: none;
        width: 100%;
        cursor: pointer;

        color: ${(props) => props.theme.baseTheme.white};
        text-transform: uppercase;
        font-weight: 700s;
      }

      button:hover {
        background: ${(props) => props.theme.productTheme.yellow};
      }
    }
  }
`

export const PaymentContainer = styled.footer`
  margin-top: 2rem;
  padding: 2.5rem;
  background: ${(props) => props.theme.baseTheme.card};
  border-radius: 6px;
  width: auto;

  @media (max-width: 605px) {
    padding: 1.8rem;
  }

  @media (max-width: 505px) {
    padding: 1.5rem;
  }

  @media (max-width: 405px) {
    padding: 1rem;
  }

  header {
    display: flex;
    align-items: flex-start;
    gap: 0.5rem;
    margin-bottom: 2rem;

    h4 {
      font-weight: 400;
      font-size: 1rem;
      line-height: 130%;
      color: ${(props) => props.theme.baseTheme.subtitle};
    }

    p {
      font-weight: 400;
      font-size: 0.875rem;
      line-height: 130%;
      color: ${(props) => props.theme.baseTheme.text};
    }
  }

  nav {
    display: flex;
    gap: 0.75rem;
    flex-wrap: wrap;

    button:hover {
      background: ${(props) => props.theme.baseTheme.hover};
    }

    button:focus {
      background: ${(props) => props.theme.productTheme['purple-light']};
      outline: 0;
      box-shadow: 0 0 0 2px
        ${(props) => props.theme.productTheme['purple-dark']};
    }

    button {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 1rem;
      border-radius: 6px;
      gap: 0.75rem;
      border: none;
      cursor: pointer;
      background: ${(props) => props.theme.baseTheme.button};

      transition: 0.2s;

      @media (max-width: 1200px) {
        p {
          font-size: 80%;
        }
      }

      @media (max-width: 999px) {
        padding: 1rem;
      }

      p {
        font-weight: 400;
        font-size: 0.75rem;
        line-height: 160%;
        text-transform: uppercase;
        color: ${(props) => props.theme.baseTheme.text};
      }
    }
  }
`

export const BaseInputFormCheckout = styled.input`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0.75rem;
  gap: 0.25rem;
  background: ${(props) => props.theme.baseTheme.input};
  border: 1px solid ${(props) => props.theme.baseTheme.button};
  border-radius: 4px;
  color: ${(props) => props.theme.baseTheme.label};
  font-size: 0.875rem;
`
export const InputCheckoutCep = styled(BaseInputFormCheckout)`
  width: 12.5rem;
  height: 2.625rem;
`
export const InputCheckoutRua = styled(BaseInputFormCheckout)`
  width: auto;
  height: 2.625rem;
`
export const InputCheckoutNumero = styled(BaseInputFormCheckout)`
  width: auto;
  height: 2.625rem;
`
export const InputCheckoutComplemento = styled(BaseInputFormCheckout)`
  width: auto;
  height: 2.625rem;
`
export const InputCheckoutBairro = styled(BaseInputFormCheckout)`
  width: auto;
  height: 2.625rem;
`
export const InputCheckoutCidade = styled(BaseInputFormCheckout)`
  width: auto;
  height: 2.625rem;
`
export const InputCheckoutUf = styled(BaseInputFormCheckout)`
  max-width: 60px;
  height: 42px;
`

export const SelectedProductsAside = styled.aside`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2.5rem;
  background: ${(props) => props.theme.baseTheme.card};
  border-radius: 6px 44px;

  @media (max-width: 605px) {
    padding: 1.8rem;
  }

  @media (max-width: 505px) {
    padding: 1.5rem;
  }

  @media (max-width: 405px) {
    padding: 1rem;
  }

  @media (max-width: 475px) {
    padding: 30px;
  }

  @media (max-width: 410px) {
    padding: 15px;
  }
`

export const Container = styled.div`
  h3 {
    font-family: 'Baloo 2';
    font-weight: 700;
    font-size: 1.125rem;
    line-height: 130%;
    color: ${(props) => props.theme.baseTheme.subtitle};
    margin-bottom: 1rem;
  }
`
