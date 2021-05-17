import React from "react"
import styled from "styled-components"
import SearchHouses from "../SearchTab/SearchHouses"
import Media from "react-media"
import { Link } from "gatsby"

const FeaturedHousesComponent = ({data}) => {
  const properties =
    data &&
    data.allMdx &&
    data.allMdx.nodes &&
    data.allMdx.nodes
      .filter(node => {
        return node.frontmatter.listType !== null && node.frontmatter.destacada === true})
      .map(frontmatter => {
        return { ...frontmatter.frontmatter }
      }).reverse()


  const renderParseInt = (price) => {
    
    if(isNaN(parseInt(price).toLocaleString().replace(/,/g, '.'))){
      return '-'
    }
    return parseInt(price).toLocaleString().replace(/,/g, '.')
  }
  const renderHouses = () => {
    return (
      properties &&
      properties.length > 0 &&
      properties.map((property, index) => {
        if (index <= 15) {
          return (
            <Link to={`/propiedad?id=${property.id}`}>
            <StateContainer>
              <StateImage bg={property.images[0]}>
                <StateInfo>
                  <StateLabel>{property.title}</StateLabel>
                  <StateAddress>{property.location}</StateAddress>
                  <StatePrice>
                    {property.currency} {renderParseInt(property.price)}
                  </StatePrice>
                </StateInfo>
              </StateImage>
            </StateContainer>
            </Link>
          )
        }
      })
    )
  }

  const renderFeaturedHouses = (matches, properties) => {
    if (matches.small) {
      return (
        <FeaturedHouses>
          <FeaturedColumn>
            <TitleContainer id="featured">
              <h2>Nuevos Ingresos</h2>
            </TitleContainer>
            <FeaturedStateRow>{renderHouses(properties)}</FeaturedStateRow>
          </FeaturedColumn>
        </FeaturedHouses>
      )
    } else if (matches.large) {
      return (
        <FeaturedHouses>
          <FeaturedColumn>
            <TitleContainer id="featured">
              <h2>Nuevos Ingresos</h2>
            </TitleContainer>
            <FeaturedStateRow>{renderHouses(properties)}</FeaturedStateRow>
          </FeaturedColumn>
        </FeaturedHouses>
      )
    }
  }

  return (
    <>
      <Media queries={{ small: { maxWidth: 768 }, large: { minWidth: 769 } }}>
        {matches => renderFeaturedHouses(matches, properties)}
      </Media>
    </>
  )
}

export default FeaturedHousesComponent

const StateInfo = styled.div`
  display: none;
  background-color: #303f9f;
  opacity: 0.6;
  width: inherit;
  height: inherit;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`



const StateImage = styled.div`
  background-image: url(${props => props.bg});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 10px;
  h4,
  h5 {
    display: none;
  }

  :hover {
    cursor: pointer;
    h4,
    h5 {
      display: initial;
      color: white;
    }
    div {
      display: flex;
    }
  }
  width: 100%;
  height: 10rem;
`

const StateLabel = styled.h5`
  font-family: RobotoB;
  margin: 0;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  text-align: center;
  width: 10rem;
`

const StateAddress = styled.h5`
  font-family: RobotoM;
  margin: 0;
  text-align: center;
`

const StatePrice = styled.h4`
  font-family: RobotoB;
  margin: 0;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  text-align: center;
`

const StateContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  flex-wrap: wrap;
  width: 15rem;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;


  @media (max-width: 768px) {
    width: 100%;
  }
 
`

const FeaturedStateRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: start;
  padding: 1rem;
  flex-wrap: wrap;
  justify-content: end;
  a{
    color: transparent;
  }
  @media (max-width: 768px) {
    justify-content: center;
    padding-right: 0px;
    padding-left: 0px;
    width: 100%;
    a{
      width: 100%;
      margin-right: 0px;
    }
  }
`

const SearchColumn = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 32%;

  @media (max-width: 768px) {
    width: 100% !important;
  }
`

const FeaturedColumn = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  flex-wrap: wrap;
`

const TitleContainer = styled.div`
  width: 100%;
  opacity: 0.9;
  display: flex;
  flex-direction: column;
  padding: 1rem;

  h4,h3,h2 {
    margin: 0px;
    font-family: RobotoB;
    letter-spacing: 1px;
    text-transform: initial;
    color: #323785;
    text-align:center;
  }

  @media (max-width: 768px) {
    width: 100%;
  }

`

const FeaturedHouses = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: start;
  background-color: #fcfcfc;
  padding: 2rem;
  padding-left: 7rem;
  padding-right: 7rem;
  
  @media (max-width: 768px) {
   padding: 1rem;
   padding-top: 1rem;
  }
  #search{
    width: 100%;
    border-right: 1px solid #323785;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    @media (max-width: 768px) {
        border-right: 0px;
        border-bottom-right-radius: 10px;
        border-top-right-radius: 10px;
        flex-direction: column;
       }
   
  }

  #featured{
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    @media (max-width: 768px) {
      border-right: 0px;
      border-bottom-left-radius: 10px;
      border-top-left-radius: 10px;
     }
  }
  @media (max-width: 768px) {
    justify-content: center;
    flex-direction: column;
   }
  }
`
