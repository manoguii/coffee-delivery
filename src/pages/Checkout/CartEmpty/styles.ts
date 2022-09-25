import styled from 'styled-components'

export const CartEmptyContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;

  h4 {
    color: ${(props) => props.theme.productTheme.purple};
    font-size: 1.2rem;
  }

  span {
    color: ${(props) => props.theme.baseTheme.text};
    text-align: center;
    font-size: 0.9rem;
  }

  a {
    border: 1px solid ${(props) => props.theme.productTheme['purple-dark']};
    border-radius: 5px;
    padding: 0.875rem;
    color: ${(props) => props.theme.productTheme['purple-dark']};
    font-weight: 700;
    text-decoration: none;
    text-transform: uppercase;
    font-size: 0.875rem;
  }

  svg {
    order: -1;
  }
`
