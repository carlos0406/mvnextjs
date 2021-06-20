import styled from 'styled-components'

export const Container = styled.header`
  flex: 1;
  height: 8rem;
  background: ${props => props.theme.colors.black};
  .header {
    display: flex;
    flex: 1;

    svg {
      margin-top: 1rem;
    }
    h1 {
      padding-left: 2rem;
      margin-top: 0.75rem;
      font-weight: 700;
    }

    .data {
      margin-left: auto;
      font-size: 1.45rem;
    }

    .link,
    .data {
      display: flex;
      align-items: center;
    }
  }

  span {
    display: flex;
    justify-content: center;
  }

  @media (max-width: 576px) {
    height: 4rem;
    font-size: 0.75rem;
    .data,
    svg {
      visibility: hidden;
    }
    h1 {
      position: absolute;
    }
  }
`
export const Link = styled.a`
  text-decoration: none;
  color: ${props => props.theme.colors.brightCyan};
  font-size: 1.25rem;
  padding: 0 2rem;
`
