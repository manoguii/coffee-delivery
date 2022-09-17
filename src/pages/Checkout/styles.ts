import styled from 'styled-components'

export const ContainerMain = styled.main`
  display: flex;
  justify-content: space-between;
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
    padding: 2.5rem;
    background: ${(props) => props.theme.baseTheme.card};
    border-radius: 6px;
    width: 40rem;

    section {
      display: flex;
      flex-direction: column;
      gap: 1rem;

      div {
        display: flex;
        gap: 0.75rem;
      }
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
  }
`

export const PaymentContainer = styled.footer`
  margin-top: 0.75rem;
  padding: 2.5rem;
  background: ${(props) => props.theme.baseTheme.card};
  border-radius: 6px;
  width: 40rem;

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
`
export const InputCheckoutCep = styled(BaseInputFormCheckout)`
  width: 12.5rem;
  height: 2.625rem;
`
export const InputCheckoutRua = styled(BaseInputFormCheckout)`
  width: 35rem;
  height: 2.625rem;
`
export const InputCheckoutNumero = styled(BaseInputFormCheckout)`
  width: 12.5rem;
  height: 2.625rem;
`
export const InputCheckoutComplemento = styled(BaseInputFormCheckout)`
  width: 21.75rem;
  height: 2.625rem;
`
export const InputCheckoutBairro = styled(BaseInputFormCheckout)`
  width: 12.5rem;
  height: 2.625rem;
`
export const InputCheckoutCidade = styled(BaseInputFormCheckout)`
  width: 17.25rem;
  height: 2.625rem;
`
export const InputCheckoutUf = styled(BaseInputFormCheckout)`
  width: 60px;
  height: 42px;
`

export const SelectedProducts = styled.aside`
  width: 28rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 40px;
  background: ${(props) => props.theme.baseTheme.card};
  border-radius: 6px 44px;

  ul {
    display: flex;
    width: 100%;
    flex-direction: column;
    margin-top: 1.5rem;
  }

  li {
    display: flex;
    justify-content: space-between;
  }
`

export const ContainerAside = styled.div`
  h3 {
    font-family: 'Baloo 2';
    font-weight: 700;
    font-size: 1.125rem;
    line-height: 130%;
    color: ${(props) => props.theme.baseTheme.subtitle};
    margin-bottom: 1rem;
  }
`
