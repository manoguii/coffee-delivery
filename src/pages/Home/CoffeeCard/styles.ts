import styled from 'styled-components'

export const ContainerCoffeeCard = styled.div`
  width: auto;
  background: ${(props) => props.theme.baseTheme.card};
  border-radius: 6px 36px;
  padding: 0 1.25rem 1.25rem 1.25rem;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    div:nth-child(2) {
      display: flex;
      flex-direction: row;
      gap: 0.25rem;
    }

    span {
      font-size: 0.625rem;
      line-height: 130%;
      font-weight: 700;
      text-transform: uppercase;
      color: ${(props) => props.theme.productTheme['yellow-dark']};

      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0.25rem 0.5rem;
      background: ${(props) => props.theme.productTheme['yellow-light']};
      border-radius: 100px;
      margin: 0.75rem 0 1rem 0;
    }
  }

  img {
    width: 7.5rem;
    height: 7.5rem;
    margin-top: -1.5rem;
  }

  header {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    h4 {
      color: ${(props) => props.theme.baseTheme.subtitle};
      font-size: 1.25rem;
      font-family: 'Baloo 2';
      font-weight: 700;
      line-height: 130%;
    }

    p {
      color: ${(props) => props.theme.baseTheme.label};
      font-weight: 400;
      font-size: 0.875rem;
      line-height: 130%;
      text-align: center;
    }
  }

  footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 2.063rem;

    p {
      font-size: 0.875rem;
      line-height: 130%;
      font-weight: 400;
      font-family: 'Roboto';
      color: ${(props) => props.theme.baseTheme.text};
      span {
        font-size: 1.5rem;
        line-height: 130%;
        font-weight: 800;
        font-family: 'Baloo 2';
        text-transform: uppercase;
        color: ${(props) => props.theme.baseTheme.text};
      }
    }

    nav {
      display: flex;

      button {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0.5rem;
        border-radius: 6px;
        gap: 0.5rem;
        cursor: pointer;
        border: none;
        background: ${(props) => props.theme.productTheme['purple-dark']};

        transition: 0.2s;
      }

      button:hover {
        background: ${(props) => props.theme.productTheme.purple};
      }

      div {
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 6px;
        gap: 0.25rem;
        padding: 0.5rem;
        flex-direction: row;
        height: 2.375rem;
        width: 4.5rem;
        background: ${(props) => props.theme.baseTheme.button};
        margin-right: 0.5rem;

        button {
          border: none;
          cursor: pointer;
          background: ${(props) => props.theme.baseTheme.button};
          padding: 0;
        }

        button:focus {
          box-shadow: none;
        }

        button:hover {
          background: ${(props) => props.theme.baseTheme.button};
        }

        p {
          font-size: 1rem;
          line-height: 130%;
          font-weight: 400;
          background: ${(props) => props.theme.baseTheme.button};
          color: ${(props) => props.theme.baseTheme.title};
          padding: 0 0.313rem;
        }
      }
    }
  }
`
