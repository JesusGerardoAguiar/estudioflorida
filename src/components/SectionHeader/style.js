import styled from "styled-components"

export const HeaderSectionRow = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding-top: 3rem;
  height: 15rem;
`

export const IconCircle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 3px solid #aa5c3b;
  height: inherit;
  border-radius: 122px;
  width: 15rem;
`

export const IconRow = styled.div`
  display: flex;
  flex-direction: row;
  z-index: 4;
  position: absolute;
  background: white;
  width: 25%;
  height: inherit;
  align-items: center;
  justify-content: flex-end;
  @media (max-width: 768px) {
    display: none;
  }
`

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: inherit;
  width: 100%;
`

export const Column = styled.div`
  height: 50%;
  width: 100%;
  text-align: center;

  h1 {
    font-family: "LeagueSpartanBold";
    color: #aa5c3b;
    text-transform: uppercase;
    @media (max-width: 768px) {
      margin-top: ${props => `${props.marginTop}!important`};
    }
  }
`
