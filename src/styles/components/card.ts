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
  border: 1px solid ${props => props.theme.colors.green};
  @media (max-width: 1800px) {
    width: 18rem;
  }
  @media (max-width: 1200px) {
    font-size: 2rem;
  }
  @media (max-width: 990px) {
    width: 15rem;
  }
  @media (max-width: 768px) {
    width: 20rem;
  }
  @media (max-width: 680px) {
    width: 16rem;
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

  box-shadow: 1px 1px 4px ${props => props.theme.colors.red};
  @media (max-width: 1200px) {
    width: 12rem;
    height: 12rem;
  }
  @media (max-width: 576px) {
    width: 10rem;
    height: 10rem;
  }

  @media (max-width: 350px) {
    width: 40vw;
    height: 40vw;
  }
`
