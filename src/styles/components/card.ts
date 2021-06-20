import styled from 'styled-components'
export const CardContainer = styled.div`
  width: 20rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${props => props.theme.colors.background};
  border: 1px solid ${props => props.theme.colors.white};
  padding-bottom: 2rem;
  border-radius: 1rem;
  @media (max-width: 1800px) {
    width: 18rem;
  }
  @media (max-width: 990px) {
    width: 15rem;
  }
  @media (max-width: 576px) {
    width: 100%;
  }
`
export const Background = styled.img`
  width: 100%;
  border-radius: 1rem 1rem 0 0;
`
export const Profile = styled.img`
  border: 2px solid ${props => props.theme.colors.white};
  width: 8rem;
  height: 8rem;
  border-radius: 50%;
  transform: translateY(-50%);
  box-shadow: 4px 4px 10px ${props => props.theme.colors.background};
  @media (max-width: 576px) {
    width: 10rem;
    height: 10rem;
  }

  @media (max-width: 350px) {
    width: 40vw;
    height: 40vw;
  }
`
