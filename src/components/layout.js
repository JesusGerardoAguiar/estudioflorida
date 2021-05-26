import React from "react"
import styled from "styled-components"
import Header from "./Header2"
import PhoneNumber from "./Header/PhoneNumber"
import Lograf from "../../content/assets/lografLogoBlack.svg"
import {theme} from '../theme';
import LogoFooter from '../../content/assets/img/logo-footer.png'

class Layout extends React.Component {
  render() {
    const { children, location } = this.props
    let header = <Header location={location} />
    let PhoneNumberBar = <PhoneNumber location={location} />
    return (
      <Wrapper>
        <div>
          <header>{header}</header>
          <main>{children}</main>
        </div>
        <Footer backgroundImg={Lograf}>
          <Row>
            <ColumnLinks>
            <h5>Link Utiles</h5>
              <ul>
                <li>Ventas y Alquileres</li>
                <li>Blog</li>
              </ul>
            </ColumnLinks>
            <div style={{width:'100%'}}>
            <img src={LogoFooter} />

            </div>
            <ColumnLinks>
              <h5>Siguenos</h5>
              <ul>
                <li>Instagram</li>
                <li>Facebook</li>
              </ul>
            </ColumnLinks>
          </Row>
          <LografLogo>
            © {new Date().getFullYear()}, powered by
            <a href="https://www.lografdesign.com">
              <img src={Lograf} alt="f" style={{ width: "5rem" }} />
            </a>
          </LografLogo>
        </Footer>
      </Wrapper>
    )
  }
}

const Row = styled.div`
  display:flex;
  flex-direction:row;
  width: 55rem;
  justify-content: space-between;
  margin-bottom: -20px;
  padding-top: 2rem;

  @media (max-width: 768px) {
    width: auto;
    flex-direction:column;
  }
}
`

const ColumnLinks = styled.div`
  display:flex;
  flex-direction:column;
  align-items: flex-start;
  justify-content:initial;
  width:30%;
  ul{
    text-align: initial;
    margin-bottom:0px;
  }
  li{
    list-style: none;
    font-size: 1rem;
    color:white;
  }
  h5{
    font-family: MontserratBold;
    color:white;
  }

  @media (max-width: 768px) {
    width: auto;
    h5,li,ul{
      text-align: center;
    width: 100%;
    margin-left: 0;

    }
  }
`

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  background-color: #fcfcfc;
  flex-direction: column;
  p {
    font-family: LeagueSpartanBold;
  }
  
  #ReactBackgroundSlider > figure {
    height: 80vh;
    top: auto;
    left: auto;
  }
`

const LografLogo = styled.div`
  display:flex;
  flex-direction:row;
  align-items:center;
  color:white;

`

const Footer = styled.footer`
  text-align: center;
  margin-top: auto;
  margin-bottom: 0px;
  font-size: 14px;
  background-color:${theme.themeColor};
  font-family: "LeagueSpartanBold";
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  a {
    display: flex;
    border-shadow: none;
    color: transparent;
    color:white;
  }
  img {
  
    margin-bottom: 0px;
    margin-left: 0.5rem;
  }
  @media (max-width: 768px) {
    margin: 0px;
    img{
      margin-bottom:1rem;
    }
  }
`

export default Layout
