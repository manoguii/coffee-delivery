import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 0;

  nav {
    display: flex;
    gap: 0.75rem;
  }

  span {
    font-weight: 400;
    font-size: 0.875rem;
    color: ${(props) => props.theme.productTheme['purple-dark']};

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.25rem;
    border-radius: 6px;
    background: ${(props) => props.theme.productTheme['purple-light']};
    padding: 0.625rem 0.5rem 0.625rem;
  }

  a:nth-child(2) {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 6px;
    background: ${(props) => props.theme.productTheme['yellow-light']};
    width: 2.375rem;
    height: 2.375rem;
  }
`
