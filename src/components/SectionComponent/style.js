import styled from 'styled-components';

export const MainDiv = styled.div`
  flex-direction: column;
  display: flex;
`

export const TextDiv = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  
  p {
    font-family: DinRegular;
    line-height: 20px;
    font-size: 18px;
  }

  @media (max-width: 768px) {
    p{
      font-family: RobotoR;
    }
  }
`

export const TextContainer = styled.div`
  flex-direction: column;
  width: 35rem;
    text-align: justify;
    overflow-y: auto;
    height: 20rem;
    margin: auto;
    padding-top: 1rem;
    @media (max-width: 768px) {
      padding: 3rem;
      padding-top: 0px;
      text-align: center;
    }
`