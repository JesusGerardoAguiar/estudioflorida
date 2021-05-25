import styled from "styled-components"

export const MainDiv = styled.div`
  flex-direction: column;
  display: flex;
`

export const RowProducts = styled.div`
  flex-direction: row;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-evenly;
  margin-bottom: 1rem;
  @media (max-width: 768px) {
    margin-bottom: 0px;
  }
`

export const ProdCircle = styled.div`
  background-image: url(${props => props.backgroundImg});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 20rem;
  height: 20rem;
  border-radius: 190px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #aa5c3b;
  :hover {
    transition: 1s;
    #ProdCircle {
      background-color: rgb(170, 92, 59, 0.5);
      justify-content: center;
      align-items: center;
      border-radius: 190px;
      display: flex !important;
      flex-direction: column;
      width: 100%;
      height: -webkit-fill-available;

      a {
        box-shadow: none;
        color: transparent;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: inherit;
        height: inherit;
      }

      p {
        font-family: LeagueSpartanBold;
        color: white;
        font-size: 25px;
        margin-bottom: 0px;
      }
    }
  }
  @media (max-width: 768px) {
    margin-bottom: 1rem;
  }
`

export const SaleCircle = styled.div`
  width: 20rem;
  height: 20rem;
  border-radius: 190px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #aa5c3b;
  #ProdCircle {
    background-color: rgb(170, 92, 59, 0.5);
    justify-content: center;
    align-items: center;
    border-radius: 190px;
    display: flex !important;
    flex-direction: column;
    width: 100%;
    height: -webkit-fill-available;

    a {
      box-shadow: none;
      color: transparent;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: inherit;
      height: inherit;
    }

    p {
      font-family: LeagueSpartanBold;
      color: white;
      font-size: 25px;
      margin-bottom: 0px;
    }
  }
  @media (max-width: 768px) {
    margin-bottom: 1rem;
  }
`

export const IconDiv = styled.div`
  width: 10rem;
  height: 8rem;
  background-image: url(${props => props.backgroundImg});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: contain;
`

export const Button = styled.button`
  width: 10rem;
  height: 3rem;
  border: 3px solid #aa5c3b;
  font-family: LeagueSpartanBold;
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
  padding: 5rem;
`
