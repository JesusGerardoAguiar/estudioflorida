import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import { theme } from "../theme"
import Layout from "../components/layout"
import FeaturedHousesComponent from "../components/FeaturedHouses"
import { createGlobalStyle } from "styled-components"
import SearchTab from "../components/SearchTab/SearchInit"
import Contact from "../components/EmailContainer"
import HomeBg from "../../content/assets/img/home-bg.jpg"
import HomeBgMobile from "../../content/assets/img/home-bg-mobile.jpg"
import LogoHome from "../../content/assets/img/logo-home.png"
import EmailContainer from "../components/EmailContainer"
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
  a{
    text-decoration: none!important;
  }
`

class Studio extends React.Component {
  render() {
    return (
      <Layout location={this.props.location} title={"Quien Soy"}>
        <GlobalStyles />

        <Span>
           <p>Esc. Andrea Alchurrut.-  Egresada de la Universidad de la República (2011). (Foto)<br />
Busco darle a los negocios, actos y diferentes situaciones el marco jurídico que mejor se adapte a las necesidades del cliente, contribuir aportando mi experiencia y habilidades en el desempeño de mi profesión. Teniendo como objetivo crecer profesionalmente cada día.  
Servicios Notariales: Compraventas de inmuebles y de automotores, contratos de prendas e hipotecas, Promesas, Arrendamientos, Certificados Notariales, Mandatos, Cartas poderes, Actas Notariales, Capitulaciones Matrimoniales, Sucesiones, Particiones, etc.<br />

Contáctame, trabajemos juntos.</p>
        </Span>
        <MainDiv>
        <ContactDiv>
          <EmailContainer propertyId={""} location={"/studio"} showTitle={false} />
        </ContactDiv>
      </MainDiv>
      </Layout>
    )
  }
}

const Span = styled.div`
  text-align: center;
  padding:5rem;
  padding-bottom:0rem;
  h3 {
    font-family: LeagueSpartanBold;
    color: ${theme.themeColor};
    margin-bottom:2rem;
  }
  p{font-size: 18px;
    line-height: 40px;
    text-align: start;
    font-family: MontserratRegular;
}

`

const Container = styled.div`
  width: 40rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid lightgray;
  background: lightgray;
  padding: 1rem;
  border-radius: 10px;
  opacity: 0.9;
  @media (max-width: 768px) {
    width: inherit;
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

const PresentationText = styled.h4`
  margin: 0px;
  font-family: MontserratBold;
  work-break: break-all;
  color: #2f358f;
  margin-bottom: 0px;
  margin-top: 0px;
  padding: 0.5rem;
  padding-top: 0px;
  padding-bottom: 2px;
`

const PresentationColumn = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`

const SearchContainer = styled.div`
  height: 100vh;
  margin: 0;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;

  background-image: url(${HomeBg});
  img {
    padding-top: 5rem;
  }
  h3 {
    color: #fff;
    font-family: LeagueSpartanBold;
    font-size: 25px;
  }
  @media (max-width: 768px) {
    background-image: url(${HomeBgMobile});
    h3 {
      font-size: 15px;
      text-align: center;
      padding: 3rem;
    }
    img {
      width: 15rem;
    }
  }
`
const ContactDiv = styled.div`
  width: 50rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const MainDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: row;
  padding: 2rem;
  align-items: end;
 
  h3 {
    margin: 0px;
    font-family:LeagueSpartanBold;
    work-break: break-all;
    color:  ${theme.themeColor};
    margin-bottom: 0px;
    margin-top: 0;
    padding-top: 0px;
  }
  h1 {
    font-family: "MontserratRegular";
    color: ${theme.themeColor};
    text-transform: uppercase;
    margin-right: 1.5rem;
  }
  img {
    :hover {
      opacity: 0.5;
    }
  }

  @media (max-width: 768px) {
    flex-wrap:wrap;
  }
`

export default Studio
