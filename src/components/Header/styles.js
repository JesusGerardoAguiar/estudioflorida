import styled from "styled-components"

export const InsideLinkDiv = styled.div`
  display: flex;
  flexd-irection: row;
  justify-content: center;
  flex-wrap: wrap;
  @media (max-width: 768px) {
    margin-left: 0rem;
  }
`

export const LinkDiv = styled.div`
  width: 100%;
  // padding: 1rem;
  font-size: 14px;
  color: #016699;
  font-family: "LeagueSpartanBold";
  font-weight: 300;
  text-align: center;
  cursor: pointer;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  display: flex;
  height: inherit;
  align-items: center;

  padding-left: 5rem;
  width: 100%;

  a {
    text-decoration: none !important;
    color: white;
    box-shadow: none;
    color: #2f358f;
    z-index: 2;
  }

  


  @media (max-width: 768px) {
    color: white;
    font-style: normal;
    font-weight: bold;
    font-size: 13px;
    width: 100%;
    height: 2.5rem;
    border-bottom: 0.2px solid white;
    z-index: auto!important;
    padding-left: 0px!important;
    border-bottom: 0.2px solid white;
    a {
      width: 100%;
      text-transform: uppercase;
      z-index: auto!important;
      margin-right: 0px;
      text-decoration: none;
      color: white;
    }
  }
`

export const LinkBox = styled.div`
  height: inherit;
  width: fit-content;
  padding: 1rem;
  justify-content: center;
  align-items: center;
  display: flex;
  z-index: 4;
  :hover{
    border-top: 2px solid #2f358f;
    transition: 0.5s;
    a{
      color: #2f358f;
      z-index: 2;
    }
  }

  @media (max-width: 768px) {
  
    a {
      :hover{
        color: white;
      }
      color: white;
      margin-right: 0px;
      text-decoration: none;
    }
  }
`

export const LogoDiv = styled.div`
  width: 100%;
  height: 8rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
`

export const LinksContainerDiv = styled.div`
  width: 100%;
  height: 5rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    height: 16rem;
    margin-bottom: 10px;
  }
`

export const MainDiv = styled.nav`
  display: flex;
  flex-direction: row;
  z-index: 1;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 5rem;
  background-color: #FFFFF;
  
  @media (max-width: 768px) {
    padding-right: 1rem;
    padding-left: 1rem;
    flex-direction: row;
    img {
      margin-bottom: 0px;
    }
    justify-content: space-between;
    align-items: center;
    height: 5rem;
  }
`

export const ImageDiv = styled.div`
  width: 20rem;
  display: flex;
  justify-content: center;

  h1 {
    margin-top: 0px;
    letter-spacing: 9px;
  }

  @media (max-width: 768px) {
    width: 10rem;
  }
`

export const DivOptions = styled.div`
  display: flex;

  @media (max-width: 768px) {
    display: none;
  }
`

export const LinkImg = styled.div`
  text-align: center;
  cursor: pointer;
  flex-direction: row;
  margin: 3rem;
  margin-right: 0rem;
  margin-top: 2.5rem;
  @media (max-width: 768px) {
    margin: 0px !important;
    margin-right: 0px !important;
    margin-top: 0px !important;
  }
`

export const IconCircule = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 18px;
  border: 5px solid #f4e1c1;
  width: 2rem;
  height: 2rem;
`

export const IconDiv = styled.div`
  display: flex;
  flex-direction: row;
  width: 5rem;
  justify-content: space-evenly;

  a {
    box-shadow: none;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
    margin-top: 2rem;
    img {
      margin-right: 1rem;
    }
  }
`
