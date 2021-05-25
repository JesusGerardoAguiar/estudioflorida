import styled from "styled-components"
import InputBase from "@material-ui/core/InputBase"

export const Box = styled.div`
  width: 35rem;
  border: 1px solid #2F358F;
  padding: 2rem;
  border-radius: 10px;
  padding-bottom: 0px;
  display: -webkit-flex;
  flex-direction: column;
  align-items: flex-end;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    width: 17rem;
  }
`

export const InputField = styled(InputBase)`
  color: white;
  height: 76.6666666px;
  border: 1px solid #2F358F;
  border-radius: 10px;
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
  border: 1px solid #2F358F;
  border-radius: 10px;
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

  border: 1px solid #2F358F;
  border-radius: 10px;
  font-family: LeagueSpartanBold;
  text-transform: uppercase;
  color: #2F358F;
  outline: none;
  cursor: pointer;
  background-color: white;
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
`

export const FormContainer = styled.form`
  width: 100%;
  flex-direction: column;
  align-items: flex-end;
  display: flex;
  margin-bottom: 0px;
`
