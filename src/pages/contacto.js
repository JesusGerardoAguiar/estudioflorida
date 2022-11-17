import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import LocationIcon from '../../content/assets/icons/location.svg'
import FaxIcon from '../../content/assets/icons/fax.svg'
import CellphoneIcon from '../../content/assets/icons/cellphone.svg'
import PhoneNumberIcon from '../../content/assets/icons/phone-number.svg'
import EmailIcon from '../../content/assets/icons/email.svg'
import { createGlobalStyle } from "styled-components"
import SearchTab from "../components/SearchTab/SearchInit"
import MobileIcon from '../components/icons/phone'
import BackgroundSlider from "react-background-slider"

const GlobalStyles = createGlobalStyle`
 
  @font-face {
    font-family: MontserratRegular;
    src: url(${require("../../content/assets/fonts/Montserrat-Regular.ttf")});
  }
  @font-face {
    font-family: MontserratBold;
    src: url(${require("../../content/assets/fonts/Montserrat-SemiBold.ttf")});
  }
  @font-face {
    font-family: LeagueSpartanBold;
    src: url(${require("../../content/assets/fonts/LeagueSpartan-Bold.otf")});
  }
  h1,h3,h4,h5,h6{
  }
  a{
    text-decorator: none!important;
  }
`

class Contacto extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <GlobalStyles />
        <Container>
          <PresentationText>Contacto</PresentationText>
          <div>

          <p id='contact-bullets'> <img src={LocationIcon} />Cordón, Montevideo, Uruguay </p>
          <p id='contact-bullets'><MobileIcon />  +598 94 140 123 - +598 92 689 689</p>
          <p id='contact-bullets'><img src={PhoneNumberIcon} />   24007347  </p>
          <p id='contact-bullets'><img src={EmailIcon} />estudioinmobiliarioflorida@gmail.com</p>
          </div>
        </Container>
      </Layout>
    )
  }
}

const PresentationText = styled.h2`
  margin: 0px;
  font-family: MontserratBold;
  work-break: break-all;
  color: #2f358f;
  margin-bottom: 0px;
  margin-top: 0px;
  padding: 0.5rem;
  padding-top: 0px;
  padding-bottom: 2rem;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  border-radius: 10px;
  opacity: 0.9;
  justify-content: center;
  #ltaif{
    font-family: MontserratBold;
    font-size: 1.2rem;
    align-self: self-end;
  }
  #contact-bullets {
    align-self: start;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  h1 {
    color: #2f358f;
  }
  img{
    margin-bottom: 0px;
    margin-right: 0.5rem;
  }
  @media (max-width: 768px) {
    width: inherit;
    padding-right:1rem;
    padding-left: 1rem;
  }
`

const PresentationTextBox = styled.div`
  display: flex;
  flex-direction: column;
  border: 4px solid white;
  border-top: 0px;
  border-bottom: 0px;
  border-right: 0px;
  margin-top: 8px;
  #deskltaif {
    border-bottom: 4px solid white;
    padding-top: 0px;
    width: 28.22222222rem;

    @media (max-width: 768px) {
      width: inherit;
    }
  }
`

const PresentationColumn = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`

const SearchContainer = styled.div`
  height: 80vh;
  margin: 0;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`

export default Contacto

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
