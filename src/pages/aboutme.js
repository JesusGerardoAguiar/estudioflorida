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
import AboutMeImg from "../../content/assets/aboutme.jpeg"
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

class AboutMe extends React.Component {
  render() {
    return (
      <Layout location={this.props.location} title={"Quien Soy"}>
        <GlobalStyles />
        <Span>
          <h3>¡Bienvenidos! </h3>{" "}
          <p>
            Hola, soy Andrea Alchurrut Duarte, Directora de Estudio Florida
            Inmobiliaria. Soy mamá de Felipe de 2 años, Operadora Inmobiliaria
            recibida de UTU en el año 2012 y Escribana Pública desde 2011.
            Comencé a emprender en el rubro inmobiliario en 2016, previamente
            trabajé en relación de dependencia por 5 años, siendo agente en otra
            Inmobiliaria de Montevideo.
            <br />
            Durante la relación de dependencia aprendí mucho de la actividad,
            pero llegó un momento, en que necesité crecer personal y
            profesionalmente, abarcar tareas que aumentaran la compatibilidad
            con mi profesión y poder ser decisora de mi futuro. Tiempo de poner
            la mira, desde otro punto de vista, el desafío de ser emprendedora.
            <br />
            Tomé mi experiencia y conocimientos y di el paso. Logré
            independizarme. Hoy Estudio Florida tiene 5 años en el mercado, con
            una cartera de clientes fijos y en crecimiento. La Inmobiliaria es
            hace varios años socia de la Asociación de Agentes Inmobiliarios del
            Uruguay (A.D.I.U), institución que nos brinda capacitación constante
            y un equipo de trabajo con más de 200 profesionales inmobiliarios,
            con los cuales compartimos tanto experiencias como material en venta
            y alquiler, permitiendo abarcar el 100% del mercado.
            <br />
            Uno de mis diferenciales es la cordial relación que tengo con los
            clientes, intento empatizar con la necesidad u oportunidad que los
            encuentra en el momento de pensar o llevar a cabo una operación de
            esta índole.
            <br />
            Te invito a que me contactes y conversemos sobre ello para darte ¡La
            solución que buscas!
          </p>
          <div
            style={{
              backgroundImage: `url(${AboutMeImg})`,
              backgroundSize: "contain",
              width: "50rem",
              height: "30rem",
              backgroundRepeat: 'no-repeat',
              margin:'auto'
            }}
          />
        </Span>
      </Layout>
    )
  }
}

const Span = styled.div`
  text-align: center;
  padding: 5rem;
  h3 {
    font-family: LeagueSpartanBold;
    color: ${theme.themeColor};
    margin-bottom: 2rem;
  }
  p {
    font-size: 18px;
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

export default AboutMe
