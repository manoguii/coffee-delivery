import styled from 'styled-components'

export const FormCheckout = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 40px;
  gap: 32px;
  width: 640px;
  height: 372px;
  background: #f3f2f2;
  border-radius: 6px;
  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;

  main {
    display: flex;
    align-items: flex-start;
    padding: 0px;
    gap: 16px;
    flex-wrap: wrap;
    width: 640px;
    height: 372px;
  }

  div {
    flex-direction: row;
    padding: 0px;
    gap: 8px;
    width: 560px;
    height: 44px;

    h1 {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 130%;
    }

    p {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 130%;
    }
  }
`
export const BaseInputFormCheckout = styled.input`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 12px;
  gap: 4px;
  background: #eeeded;
  border: 1px solid #e6e5e5;
  border-radius: 4px;
`
export const InputFormCheckoutCep = styled(BaseInputFormCheckout)`
  width: 200px;
  height: 42px;
`
export const InputFormCheckoutRua = styled(BaseInputFormCheckout)`
  width: 560px;
  height: 42px;
`
export const InputFormCheckoutNumero = styled(BaseInputFormCheckout)`
  width: 200px;
  height: 42px;
`
export const InputFormCheckoutComplemento = styled(BaseInputFormCheckout)`
  width: 348px;
  height: 42px;
`
export const InputFormCheckoutBairro = styled(BaseInputFormCheckout)`
  width: 200px;
  height: 42px;
`
export const InputFormCheckoutCidade = styled(BaseInputFormCheckout)`
  width: 276px;
  height: 42px;
`
export const InputFormCheckoutUf = styled(BaseInputFormCheckout)`
  width: 60px;
  height: 42px;
`
export const PagamentoCheckout = styled.section`
  margin-top: 12px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 40px;
  gap: 32px;
  width: 640px;
  height: 207px;
  background: #f3f2f2;
  border-radius: 6px;

  ul {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px;
    gap: 12px;

    width: 560px;
    height: 51px;
  }

  div {
    padding: 0px;
    gap: 8px;
    width: 560px;
    height: 44px;

    h1 {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 130%;
      display: flex;
      align-items: center;
      color: #403937;
    }

    p {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 130%;
      display: flex;
      align-items: center;
      color: #574f4d;
    }
  }
`
export const BaseLiPagamentoCheckout = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 16px;
  gap: 12px;
  width: 178.67px;
  height: 51px;
  background: #e6e5e5;
  border-radius: 6px;

  p {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 160%;
    text-transform: uppercase;
    color: #574f4d;
  }
`
export const LiPagamentoCheckoutCredito = styled(BaseLiPagamentoCheckout)``
export const LiPagamentoCheckoutDebito = styled(BaseLiPagamentoCheckout)``
export const LiPagamentoCheckoutDinheiro = styled(BaseLiPagamentoCheckout)``
