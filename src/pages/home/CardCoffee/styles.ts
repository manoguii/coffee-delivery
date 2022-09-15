import styled from 'styled-components'

export const ContainerCardCoffee = styled.div`
  width: 16.3rem;
  height: 18rem;
  background: ${(props) => props.theme.baseTheme.card};
  border-radius: 6px 36px;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-left: 1.25rem;
  padding-right: 1.25rem;
  margin-bottom: 4.25rem;
  img {
    margin-top: -1.75rem;
  }

  > span {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0.25rem 0.5rem;
    background: ${(props) => props.theme.productTheme['yellow-light']};
    border-radius: 100px;
    font-weight: 700;
    font-size: 0.625rem;
    line-height: 1.3;
    text-transform: uppercase;
    color: ${(props) => props.theme.productTheme['yellow-dark']};
  }

  header {
    h1 {
      font-family: 'Baloo 2';
      font-style: normal;
      font-weight: 700;
      font-size: 1.25rem;
      line-height: 1.3;
      margin: 0;

      display: flex;
      align-items: flex-end;
      justify-content: center;
      text-align: center;

      color: ${(props) => props.theme.baseTheme.subtitle};
    }
    p {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-size: 0.875rem;
      line-height: 1.3;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;

      color: ${(props) => props.theme.baseTheme.label};
    }
  }

  div,
  label {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 1.3;
    text-align: right;
    color: ${(props) => props.theme.baseTheme.text};
    display: flex;
    align-items: center;
    justify-content: space-between;

    p {
      font-size: 1.5rem;
      font-weight: 800;
      line-height: 31.2px;
      font-family: 'Baloo 2', cursive;
    }
  }

  li {
    display: flex;
    gap: 8px;
  }
`
export const ContainerPrice = styled.footer`
  width: 100%;
  display: flex;
  justify-content: space-between;
  list-style: none;
  padding-bottom: 1.25rem;
`

export const ButtonNumberCoffee = styled.button`
  background: ${(props) => props.theme.baseTheme.button};
  border-radius: 6px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  gap: 0.25rem;
  border: none;
  width: 72px;
  height: 38px;
  cursor: pointer;
  span {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    line-height: 130%;
    color: ${(props) => props.theme.baseTheme.title};
    text-align: center;
  }
`

export const ButtonAddCart = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px;
  gap: 8px;
  border: none;
  border-radius: 6px;
  cursor: pointer;

  width: 38px;
  height: 38px;
  background: ${(props) => props.theme.productTheme['purple-dark']};
`
