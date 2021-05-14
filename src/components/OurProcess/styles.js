import styled from "styled-components"

export const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  #projects {
    cursor: pointer;
    :hover {
      opacity: 0.5;
    }
  }
  a {
    width: 100%;
    color: black;
  }
`

export const ProcessDiv = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: space-evenly;
  padding-left: 5rem;
  padding-right: 5rem;
  flex-wrap: wrap;
`
export const ProcessImg = styled.div`
  background-image: url(${props => props.backgroundImg});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 25rem;
  height: 25rem;
  border-radius: 200px;
  border: 15px solid #aa5c3b;
  @media (max-width: 768px) {
    margin-bottom: 0.5rem;
    width: 13rem;
    height: 13rem;
  }
`
export const ProccessTextDiv = styled.div`
  width: 25rem;
  display: flex;
  flex-direction: column;

  h1 {
    font-family: "RobotoR";
    color: #aa5c3b;
    text-transform: uppercase;
  }
  p {
    font-family: DinRegular;
    line-height: 20px;
    font-size: 18px;
    text-align: justify;
    word-break: break-word;
  }

  @media (max-width: 768px) {
    h1 {
      margin-top: 0px;
    }
    p{
      font-family: RobotoR;
    }
  }
`
export const Button = styled.button`
  width: 13rem;
  height: 3rem;
  background-color: white;
  border: 3px solid #aa5c3b;
  font-family: RobotoR;
  text-transform: uppercase;
  color: #aa5c3b;
  outline: none;
  cursor: pointer;

  :hover {
    opacity: 0.5;
  }
`

export const ButtonDiv = styled.div`
  flex-direction: row;
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 15px;
  margin-top: 2rem;
  margin-bottom: 2rem;
`