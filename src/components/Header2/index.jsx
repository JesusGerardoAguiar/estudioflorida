import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import { Navbar, Nav, NavDropdown } from "react-bootstrap"
import Logo from "../../../content/assets/img/logo-header.jpg"
import { createGlobalStyle } from "styled-components"
import styled from "styled-components"
import {theme} from '../../theme';

const GlobalStyles = createGlobalStyle`
  a{
    text-decoration: none;
    box-shadow: none;
    margin-right: 1rem;/
  }
  .navbar{position: absolute;padding:0;width:100%;}
  .nav-link{font-family:LeagueSpartanBold; color:#fff!important; :hover{
    color:${theme.secundaryColor}!important;
  }}
  .navbar-collapse{
    background-color: ${theme.secundaryColor};
    z-index: 99;
  }
  #basic-navbar-nav{
    flex-direction: row;
    justify-content: end;
    padding-left: 5rem;
  }
`

const Header = () => {
  return (
    <Navbar expand="lg">
      <GlobalStyles />
      <Navbar.Brand style={{ padding: 0 }}>
        <Img alt="logo" src={Logo} />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav>
          <Nav.Link style={{ boxShadow: "none" }} href="/">
            Inicio
          </Nav.Link>
          <Nav.Link style={{ boxShadow: "none" }} href="/">
            Ventas y Alquileres
          </Nav.Link>
          <Nav.Link style={{ boxShadow: "none" }} href="/">
            Proyectos
          </Nav.Link>
          <Nav.Link style={{ boxShadow: "none" }} href="/">
            Estudio Notarial
          </Nav.Link>
          <Nav.Link style={{ boxShadow: "none" }} href="/">
            Blog
          </Nav.Link>
          <Nav.Link style={{ boxShadow: "none" }} href="/">
            Nosotros
          </Nav.Link>
          <Nav.Link style={{ boxShadow: "none" }} href="/">
            Contacto
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

const Img = styled.img`
  margin-bottom: 0px;
  @media (max-width: 768px) {
    width: 4rem;
  }
`

export default Header
