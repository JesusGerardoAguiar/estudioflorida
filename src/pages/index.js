import React from "react"
import { graphql } from "gatsby"
import { CarouselProvider, Slide, Slider } from "pure-react-carousel"
import styled from "styled-components"
import Layout from "../components/layout"
import Durazno1 from "../../content/assets/img/durazno1.jpg"
import Durazno2 from "../../content/assets/img/durazno6.jpg"
import Durazno3 from "../../content/assets/img/durazno7.jpg"
import Durazno4 from "../../content/assets/img/durazno8.jpg"
import Durazno5 from "../../content/assets/img/durazno5.jpg"
import FeaturedHousesComponent from '../components/FeaturedHouses';
import { createGlobalStyle } from "styled-components"
import SearchTab from "../components/SearchTab/SearchInit"

import BackgroundSlider from "react-background-slider"


const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: RobotoL;
    src: url(${require("../../content/assets/fonts/Roboto-Light.ttf")});
  }
  @font-face {
    font-family: RobotoM;
    src: url(${require("../../content/assets/fonts/Roboto-Medium.ttf")});
  }
  @font-face {
    font-family: RobotoB;
    src: url(${require("../../content/assets/fonts/Roboto-Bold.ttf")});
  }
  @font-face {
    font-family: RobotoR;
    src: url(${require("../../content/assets/fonts/Roboto-Regular.ttf")});
  }
  @font-face {
    font-family: RobotoBlack;
    src: url(${require("../../content/assets/fonts/Roboto-Black.ttf")});
  }
  h1,h2,h3,h4,h5,h6{
    font-size: inherit!important;
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
            <Container>
              <PresentationColumn>
                <PresentationTextBox>
                  <PresentationText
                    id="deskltaif"
                    style={{ borderBotttom: "2px solid white" }}
                  >
                    La llave segura de su negocio{" "}
                  </PresentationText>
                  <PresentationText style={{ paddingTop: "0.2rem" }}>
                  Ventas, Alquileres, Remates y tasaciones
                  </PresentationText>
                </PresentationTextBox>
              
              </PresentationColumn>
              <SearchTab />
            </Container>
          </SearchContainer>
        </>
      )
    }
    return (
      <Layout location={this.props.location} title={siteTitle}>
        <GlobalStyles />
        <BackgroundSlider
          images={[Durazno1, Durazno2, Durazno3, Durazno4, Durazno5]}
          duration={4}
          transition={2}
        />
        {renderCarouselContent()}
       <FeaturedHousesComponent data={data}/>
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
  font-family: RobotoB;
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
  height: 80vh;
  margin: 0;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`


// const Banner = styled.div`
//   background-color: #aa5c3b;
//   width: 100%;
//   height: 25rem;
//   display: flex;
//   flex-direction: row;
//   align-items: center;
//   justify-content: space-evenly;
//   flex-wrap: wrap;
//   img {
//     width: 12rem;
//   }
//   h1 {
//     color: white;
//     font-family: RobotoB;
//     font-size: 3.5rem;
//     text-transform: uppercase;
//     margin-top: 0px;
//     margin-bottom: 0px;
//   }
//   h1 #tenpercent {
//     font-family: Museo;
//     font-size: 5.5rem;
//     margin-top: 0.5rem;
//     color: white;
//     text-transform: uppercase;
//     margin-top: 0px;
//     margin-bottom: 0px;
//   }
//   @media (max-width: 768px) {
//     text-align: center;
//     flex-direction: column;
//     h1 {
//       font-size: 1.5rem;
//     }
//     h1 #tenpercent {
//       font-size: 3.5rem;
//     }
//     img {
//       width: 8rem;
//     }
//   }
// `

export const StyledCarousel = styled(CarouselProvider)`
  display: flex;
  z-index: 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .slideInner___2mfX9 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`

export const StyledSlider = styled(Slider)`
  width: 100%;
  height: 40rem;
  justify-content: flex-start;
  padding-bottom: 40rem !important;
  display: flex;
  flex-direction: column;
`

export const StyledSlide = styled(Slide)`
  .carousel__slide-focus-ring {
    display: none;
  }
  padding-bottom: 40rem !important;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
          location
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
