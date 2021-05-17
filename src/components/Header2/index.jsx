import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import { Navbar, Nav, NavDropdown } from "react-bootstrap"
import LtaiftLogo from "../../../content/assets/icons/logoescritorio-01.svg"
import { createGlobalStyle } from "styled-components"
import styled from "styled-components"

const GlobalStyles = createGlobalStyle`
  a{
    text-decoration: none;
    box-shadow: none;
    margin-right: 1rem;/
  }
`

const Header = () => {
  return (
    <Navbar bg="light" expand="lg">
      <GlobalStyles />
      <Navbar.Brand style={{ padding: 0 }}>
        <Img alt="logo" src={LtaiftLogo} />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto ml-auto">
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
            La Empresa
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
  width: 16rem;
  margin-bottom: 0px;
  @media (max-width: 320px) {
    width: 10rem;
  }
`

{
  /* <LinkDiv>
            <LinkBox>
              <Link>Inicio</Link>
            </LinkBox>
            <Submenu
              submenu={"Casas"}
              submenuChilds={[
                {
                  menuTitle: "Ventas",
                  menuPath: "propiedades?propertyType=casas&listType=ventas",
                },
                {
                  menuTitle: "Alquileres",
                  menuPath:
                    "propiedades?propertyType=casas&listType=alquileres",
                },
              ]}
            />
            <Submenu
              submenu={"Apartamentos"}
              submenuChilds={[
                {
                  menuTitle: "Ventas",
                  menuPath:
                    "propiedades?propertyType=apartamentos&listType=ventas",
                },
                {
                  menuTitle: "Alquileres",
                  menuPath:
                    "propiedades?propertyType=apartamentos&listType=alquileres",
                },
              ]}
            />
            <LinkBox>
              <LinkScroll
                activeClass="active"
                to="process"
                spy={true}
                smooth={true}
                duration={400}
              >
                <Link
                  to="/propiedades?propertyType=terrenos"
                  style={{ marginRight: "0px" }}
                >
                  Terrenos
                </Link>
              </LinkScroll>
            </LinkBox>
            <Submenu
              submenu={"Campos y Chacras"}
              submenuChilds={[
                {
                  menuTitle: "Ventas",
                  menuPath:
                    "propiedades?propertyType=camposychacras&listType=ventas",
                },
                {
                  menuTitle: "Alquileres",
                  menuPath:
                    "propiedades?propertyType=camposychacras&listType=alquileres",
                },
              ]}
            />
            <Submenu
              submenu={"Galpones y Locales Comerciales"}
              submenuChilds={[
                {
                  menuTitle: "Ventas",
                  menuPath:
                    "propiedades?propertyType=galponesylocalescomerciales&listType=ventas",
                },
                {
                  menuTitle: "Alquileres",
                  menuPath:
                    "propiedades?propertyType=galponesylocalescomerciales&listType=alquileres",
                },
              ]}
              openTest={true}
            />
            <LinkBox>
              <LinkScroll
                activeClass="active"
                to="Contact"
                spy={true}
                smooth={true}
                duration={400}
              >
                <Link to="propiedades?propertyType=remates" style={{ marginRight: "0px" }}>
                  Remates
                </Link>
              </LinkScroll>
            </LinkBox>
            <LinkBox>
              <LinkScroll
                activeClass="active"
                to="Contact"
                spy={true}
                smooth={true}
                duration={400}
              >
                <Link to="contacto" style={{ marginRight: "0px" }}>
                  Contacto
                </Link>
              </LinkScroll>
            </LinkBox>
          </LinkDiv> */
}

export default Header
