import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import EmailContainer from "../components/EmailContainer"
import { createGlobalStyle } from "styled-components"
import styled from "styled-components"
import PriceTagIcon from "../../content/assets/icons/pricetag.png"
import BathIcon from "../../content/assets/icons/bathtub.svg"
import BedIcon from "../../content/assets/icons/king_bed.svg"
import {GoogleMap} from '../components/Map';

import ImageGallery from "react-image-gallery"
require("react-image-gallery/styles/css/image-gallery.css")

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
`

const PropertyTemplate = props => {
  const { data } = props
  const properties = data && data.allMdx && data.allMdx.nodes && data.allMdx.nodes
    .filter(node => node.frontmatter.listType !== null)
    .map(frontmatter => {
      return { ...frontmatter.frontmatter }
    })

  const images = [
    {
      original: "https://picsum.photos/id/1018/1000/600/",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
    {
      original: "https://picsum.photos/id/1015/1000/600/",
      thumbnail: "https://picsum.photos/id/1015/250/150/",
    },
    {
      original: "https://picsum.photos/id/1019/1000/600/",
      thumbnail: "https://picsum.photos/id/1019/250/150/",
    },
  ]

  const renderRentedText = (property) => {
    console.log(property)
    if(property && property.soldout){
      return <Specs style={{ marginTop: '2rem', marginBottom: '2rem' }}>Estado: VENDIDA</Specs>
    }else if(property && property.rented){
      return <Specs style={{ marginTop: '2rem', marginBottom: '2rem' }}>Estado: ALQUILADA</Specs>
    }
    return '';
  }

  const propertySelected = properties && properties.length > 0 && properties.filter((property) => property.id === parseInt(props.location.search.split('=')[1]))[0]
  const imagesToComponent =
  propertySelected && propertySelected.images && propertySelected.images.map(img => {
      return { original: img, thumbnail: img }
    })
  return (
    <Layout location={props.location}>
      <GlobalStyles />
      <MainDiv>
        <PropertyColumn>
          <PropertyImage>
            <ImageGallery
              showFullscreenButton={false}
              showPlayButton={false}
              items={imagesToComponent ? imagesToComponent : []}
            />
          </PropertyImage>
        </PropertyColumn>
        <div style={{ width: "50rem", marginLeft: "2rem" }}>
          <h3>{propertySelected && propertySelected.title}</h3>
          <Description>{ propertySelected && propertySelected.description}</Description>
          {renderRentedText(propertySelected)}
          <Specs>
            {propertySelected && propertySelected.bathroom} Baños{" "}
            <img
              alt="propiedad"
              src={BathIcon}
              style={{
                width: "1.8rem",
                marginBottom: "-1px",
              }}
            />{" "}
            &#9679; { propertySelected && propertySelected.bedroom} Dormitorios{" "}
            <img
              alt="propiedad"
              src={BedIcon}
              style={{
                width: "2rem",
                marginBottom: "-7px",
              }}
            />{" "}
            &#9679;{" "}
            <>
              {propertySelected && propertySelected.mts2} mts<sup>2</sup>{" "}
            </>
          </Specs>
          <Specs style={{ alignSelf: "flex-end", marginTop: "1.5rem" }}>
            {propertySelected && propertySelected.location}
          </Specs>
          <PriceTag>
            {propertySelected && propertySelected.currency} {propertySelected && propertySelected.price}
            <img alt="propiedad" style={{ margin: 0 }} src={PriceTagIcon} />
          </PriceTag>
        </div>
      </MainDiv>
      <MainDiv>
        <ContactDiv>
          <h3 style={{ marginTop: 0, marginBottom: "1.5rem" }}>
            ¡Envianos tu consulta!
          </h3>
          <EmailContainer propertyId={ propertySelected && propertySelected.id} location={props.location.href} />
        </ContactDiv>
      </MainDiv>
      <MainDiv>
        <GoogleMap googleMapsApiKey={'AIzaSyACQIe4BWvhGROmJiNj9XmvHwywh1qMQ80'} address={{ lat: (propertySelected && propertySelected.longitud), lng: (propertySelected && propertySelected.latitud) }} />
      </MainDiv>
    </Layout>
  )
}

// 

const PropertyImage = styled.div``

const Description = styled.p`
  margin: 0px;
  font-family: RobotoL;
  work-break: break-all;
  margin-bottom: 0.5rem;
  margin-top: 2rem;
  margin-top: 0.5rem;
  padding-top: 0px;
  text-align: justify;
  margin-right: 3rem;
`

const PriceTag = styled.div`
  width: 9rem;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  align-self: flex-end;
  background-color: #2f358f;
  color: #fff;
  padding: 7px 5px;
  border-radius: 3px;
  cursor: pointer;
  clear: both;
  margin-top: 0px;
  font-size: 17px;
  font-family: RobotoL;
  margin-top: 1.5rem;

  img {
    width: 1rem !important;
  }
`

const ContactDiv = styled.div`
  width: 50rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const PropertyColumn = styled.div`
  width: 50rem;
`

const Specs = styled.h5`
display: flex,
flexDirection: row,
width: 25rem,
alignItems: center
margin: 0px;
font-family: RobotoM;
work-break: break-all;
margin-bottom: 0.5rem;
margin-top: 0.5rem;
padding-top: 0px;
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
    font-family: RobotoM;
    work-break: break-all;
    color: #2f358f;
    margin-bottom: 0px;
    margin-top: 0;
    padding-top: 0px;
  }
  h1 {
    font-family: "RobotoR";
    color: #aa5c3b;
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

export default PropertyTemplate

export const pageQuery = graphql`
  query BlogPostBySlug {
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
          soldout
          rented
        }
      }
    }
  }
`
