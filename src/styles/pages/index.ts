import styled from 'styled-components'

export const MainContainer = styled.div`
  background-color: ${props => props.theme.colors.cursorColor};
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
`
export const Body = styled.div`
  border: none;
  padding: 2rem;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 1rem;
  flex: 1;

  @media (max-width: 1500px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 576px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`
