import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  width: 100%;
  padding-bottom: 1rem;
  margin-bottom: 1rem;

  border-bottom: 1px solid ${(props) => props.theme.baseTheme.button};

  div:nth-child(1) {
    display: flex;
    flex-direction: row;
  }

  div:nth-child(2) {
    display: flex;
    flex-direction: column;
    margin-left: 1.25rem;
  }

  img {
    width: 4rem;
    height: 4rem;
  }

  span {
    font-size: 1rem;
    font-weight: 700;
    color: ${(props) => props.theme.baseTheme.text};
  }
`

export const NavButtonContainer = styled.nav`
  padding-top: 0.5rem;
  display: flex;

  button {
    display: flex;
    align-items: center;
    border: none;
    cursor: pointer;
    background: ${(props) => props.theme.baseTheme.button};
    padding: 0;
    justify-content: center;
    border-radius: 6px;
    gap: 0.25rem;
    padding: 0.5rem;
    flex-direction: row;
    height: 2rem;
    width: auto;
    text-transform: uppercase;
    font-size: 0.75rem;
    color: ${(props) => props.theme.baseTheme.text};
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    gap: 0.25rem;
    padding: 0.5rem;
    flex-direction: row;
    height: 2rem;
    width: 4.5rem;
    background: ${(props) => props.theme.baseTheme.button};
    margin-right: 0.5rem;

    button {
      border: none;
      cursor: pointer;
      background: ${(props) => props.theme.baseTheme.button};
      padding: 0;
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
`
