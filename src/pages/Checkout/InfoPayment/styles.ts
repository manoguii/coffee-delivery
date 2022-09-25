import styled from 'styled-components'

export const InfoPaymentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

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

  ul {
    display: flex;
    width: 100%;
    flex-direction: column;
    margin-top: 1.5rem;
    gap: 0.5rem;

    li:nth-child(3) {
      p {
        font-size: 1.25rem;
        font-weight: 700;
        color: ${(props) => props.theme.baseTheme.subtitle};
      }

      span {
        font-size: 1.25rem;
        font-weight: 700;
        color: ${(props) => props.theme.baseTheme.subtitle};
      }
    }
  }

  li {
    display: flex;
    justify-content: space-between;

    p {
      font-size: 0.875rem;
      color: ${(props) => props.theme.baseTheme.text};
    }

    span {
      font-size: 1rem;
      color: ${(props) => props.theme.baseTheme.text};
    }
  }

  a {
    margin-top: 1.25rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0.75rem 0.5rem;
    gap: 0.25rem;
    background: ${(props) => props.theme.productTheme.yellow};
    border-radius: 6px;
    border: none;
    width: 100%;
    cursor: pointer;

    font-weight: 700;
    font-size: 0.875rem;
    line-height: 160%;
    text-transform: uppercase;
    color: ${(props) => props.theme.baseTheme.white};
    text-decoration: none;

    button {
      visibility: hidden;
    }

    transition: 0.2s;
  }

  a:hover {
    background: ${(props) => props.theme.productTheme['yellow-dark']};
  }
`
