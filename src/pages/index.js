import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components";
import {theme} from '../theme';
import Layout from "../components/layout"
import FeaturedHousesComponent from "../components/FeaturedHouses"
import { createGlobalStyle } from "styled-components"
import SearchTab from "../components/SearchTab/SearchInit"
import Contact from "../components/EmailContainer";
import HomeBg from '../../content/assets/img/home-bg.jpg'
import HomeBgMobile from '../../content/assets/img/home-bg-mobile.jpg'
import LogoHome from '../../content/assets/img/logo-home.png';



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

class Blog extends React.Component {
  render() {
    const { data } = this.props

    const siteTitle = data.site.siteMetadata.title

    const renderCarouselContent = () => {
      return (
        <>
          <SearchContainer>
            <img className="logo-home" src={LogoHome} />
            <SearchTab />
            <h3>Dedicados a facilitar la realización de negocios inmobiliarios</h3>
          </SearchContainer>
        </>
      )
    }
    return (
      <Layout location={this.props.location} title={siteTitle}>
        <GlobalStyles />
       
        {renderCarouselContent()}
        <FeaturedHousesComponent data={data} />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Contact />
        </div>
      </Layout>
    )
  }
}

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
img{
  padding-top:5rem;
}
  h3{
    color:#fff;
    font-family:LeagueSpartanBold;
    font-size:25px;
  }
  @media (max-width: 768px) {
    background-image: url(${HomeBgMobile});
    h3{
      font-size: 15px;
      text-align: center;
      padding: 3rem;
    }
   img{
     width: 15rem;

   }
  }
`


export default Blog

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx {
      nodes {
        frontmatter {
          bathroom
          bedroom
          currency
          date
          description
          garage
          images
          listType
          mts2
          path
          price
          propertyType
          title
          id
          latitud
          longitud
          destacada
        }
      }
    }
  }
`
