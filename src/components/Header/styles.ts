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
    color: ${(props) => props.theme.productTheme['purple-dark']};

    border-radius: 6px;
    background: ${(props) => props.theme.productTheme['purple-light']};
    padding: 0.625rem 0.5rem 0.625rem;
  }

  a {
    font-weight: 400;
    font-size: 0.875rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.25rem;
    text-decoration: none;
  }

  a:focus {
    outline: 0;
    box-shadow: none;
    color: inherit;
  }

  a:nth-child(2) {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 6px;
    background: ${(props) => props.theme.productTheme['yellow-light']};
    width: 2.375rem;
    height: 2.375rem;

    p {
      background: ${(props) => props.theme.productTheme['yellow-dark']};
      color: ${(props) => props.theme.baseTheme.white};
      border-radius: 1000px;
      width: 1.25rem;
      height: 1.25rem;
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      right: 4.5rem;
      top: 1.5rem;
    }
  }
`
