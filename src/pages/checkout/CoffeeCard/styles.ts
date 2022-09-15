import styled from 'styled-components'

export const PedidoContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem;
  border-bottom: 1px solid ${(props) => props.theme.baseTheme.button};
  padding-bottom: 2.5rem;
  main {
    display: flex;
    align-items: center;
    gap: 1.25rem;

    > div > div {
      display: flex;
      gap: 0.5rem;
    }

    p {
      font-size: 1rem;
      padding-bottom: 0.5rem;
    }
  }

  span {
    font-size: 1rem;
    font-weight: 700;
  }
`
