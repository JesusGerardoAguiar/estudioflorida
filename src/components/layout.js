import React from "react"
import styled from "styled-components"
import Header from "./Header2"
import PhoneNumber from "./Header/PhoneNumber"
import Lograf from "../../content/assets/lografLogoBlack.svg"


class Layout extends React.Component {
  render() {
    const { children, location } = this.props
    let header = <Header location={location} />
    let PhoneNumberBar = <PhoneNumber location={location} />
    return (
      <Wrapper>
        <div>
          <header>{PhoneNumberBar}</header>
          <header>{header}</header>
          <main>{children}</main>
        </div>
        <Footer backgroundImg={Lograf}>
          © {new Date().getFullYear()}, powered by
          {` `}
          <a href="https://www.lografdesign.com">
            <img src={Lograf} alt="f" style={{ width: "5rem" }} />
          </a>
        </Footer>
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  p {
    font-family: RobotoR;
  }

  #ReactBackgroundSlider > figure {
    height: 80vh;
    top: auto;
    left: auto;
  }
`

const Footer = styled.footer`
  text-align: center;
  margin-top: auto;
  margin-bottom: 0px;
  font-size: 18px;
  font-family: "RobotoR";
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  a {
    display: flex;
    border-shadow: none;
    color: transparent;
  }
  img {
    width: 5rem;
    margin-bottom: 0px;
    margin-left: 0.5rem;
  }
  @media (max-width: 768px) {
    margin: 0px;
  }
`

export default Layout
