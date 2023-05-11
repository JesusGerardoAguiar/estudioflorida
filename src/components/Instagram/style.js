import styled from "styled-components"
import InputBase from "@material-ui/core/InputBase"
import {theme} from '../../theme';
export const Box = styled.div`
  width: 35rem;
  border: 2.42px solid ${theme.secundaryColor};
  padding-bottom: 0px;
  padding: 2rem;
  display: -webkit-flex;
  flex-direction: column;
  align-items: flex-end;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    width: 17rem;
  }
`

export const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 1rem;

  h4,
  h3,
  h2 {
    margin: 0px;
    font-family: LeagueSpartanBold;
    font-weight: normal;
    font-size: 48.45px;
    line-height: 58.14px;
    text-align: center;

    letter-spacing: 1px;
    text-transform: initial;
    color: ${theme.themeColor};
    text-align: center;
  }

  @media (max-width: 768px) {
    width: 100%;
    font-size: 28.45px;
  }
`


export const InputField = styled(InputBase)`
  color: white;
  height: 76.6666666px;
  border: 2.42px solid ${theme.secundaryColor};
  box-sizing: border-box;
  padding-left: 2rem !important;
  font-family: MontserratRegular!important;
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  width: 100%;
  color: black;
  margin-bottom: 0.5rem;

  :placeholder {
   color: #2F358F;
  }
`

export const TextArea = styled(InputBase)`
  overflow: scroll;
  height: 8rem;
  border: 2.42px solid ${theme.secundaryColor};
  padding-left: 2rem !important;
  padding-top: 2rem !important;
  padding-right: 2rem !important;
  font-family: MontserratRegular !important;
  font-style: normal !important;
  font-weight: 300 !important;
  font-size: 18px !important;
  text-align: center;
  width: 100%;
  margin-bottom: 15px;
  color: black;
  cursor: text;
  display: block !important;
  position: initial !important;
  box-sizing: border-box !important;
  align-items: normal !important;
  line-height: 1.1875em !important;
  letter-spacing: 0.00938em !important;
`

export const Button = styled.button`
  width: 13rem;
  height: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 2.42px solid ${theme.secundaryColor};
  font-family: LeagueSpartanBold;
  text-transform: uppercase;
  color: ${theme.secundaryColor};
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
`

export const FormContainer = styled.form`
  width: 100%;
  flex-direction: column;
  align-items: flex-end;
  display: flex;
  margin-bottom: 0px;
`

export const Container = styled.div`
  display:flex;
  flex-direction:column;
  background-color: #fcfcfc;
  padding-bottom:2rem;
  align-items: center;

  #insta{
    @media (max-width: 768px) {
      width: 15rem!important;
    }
  }

`