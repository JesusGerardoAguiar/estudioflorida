import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import { Navbar, Nav, NavDropdown } from "react-bootstrap"
import Logo from "../../../content/assets/img/logo-header.jpg"
import { createGlobalStyle } from "styled-components"
import styled from "styled-components"
import {theme} from '../../theme';
const isClient = typeof window !== 'undefined';
const GlobalStyles = createGlobalStyle`
  a{
    text-decoration: none;
    box-shadow: none;
    margin-right: 1rem;/
  }
  .navbar{
    position: ${isClient && window.location.pathname === '/' ? 'absolute' : 'relative'};
    background-color: ${isClient &&window.location.pathname === '/' ? 'transparent' : theme.themeColor};
    padding:0;width:100%;
  }
  .nav-link{font-family:LeagueSpartanBold; color:#fff!important; :hover{
    color:${theme.secundaryColor}!important;
  }}
  .navbar-collapse{
    @media (max-width: 768px) {
      background-color: ${theme.secundaryColor};
      z-index: 99;
    }
    
  }
  #basic-navbar-nav{
    flex-direction: row;
    justify-content: end;
    padding-left: 5rem;
  }
`

const Header = () => {
  return (
    <Navbar expand="lg" style={{paddingTop:"1rem"}}>
      <GlobalStyles />
      <Navbar.Brand style={{ padding: 0 }}>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav>
          <Nav.Link style={{ boxShadow: "none" }} href="/">
            Inicio
          </Nav.Link>
          <Nav.Link style={{ boxShadow: "none" }} href="/propiedades/?propertyType=casas">
            Ventas y Alquileres
          </Nav.Link>
          <Nav.Link style={{ boxShadow: "none" }} href="/projects">
            Proyectos
          </Nav.Link>
         
          <Nav.Link style={{ boxShadow: "none" }} href="/blog">
          Información de interés
          </Nav.Link>
          <Nav.Link style={{ boxShadow: "none" }} href="/aboutme">
          Quienes somos
          </Nav.Link>
          <Nav.Link style={{ boxShadow: "none" }} href="/contacto">
            Contacto
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

const Img = styled.img`
  margin-bottom: 0px;
  width: ${isClient && window.location.pathname === '/' ? '0rem' : '6rem'};
  @media (max-width: 768px) {
    width: 4rem;
  }
`

export default Header
