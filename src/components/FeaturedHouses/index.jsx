import React from "react"
import styled from "styled-components"
import SearchHouses from "../SearchTab/SearchHouses"
import Media from "react-media"
import { Link } from "gatsby"
import { theme } from "../../theme"

const FeaturedHousesComponent = ({ data }) => {
  const properties =
    data &&
    data.allMdx &&
    data.allMdx.nodes &&
    data.allMdx.nodes
      .filter(node => {
        return (
          node.frontmatter.listType !== null &&
          node.frontmatter.destacada === true
        )
      })
      .map(frontmatter => {
        return { ...frontmatter.frontmatter }
      })
      .reverse()

  const renderParseInt = price => {
    if (
      isNaN(
        parseInt(price)
          .toLocaleString()
          .replace(/,/g, ".")
      )
    ) {
      return "-"
    }
    return parseInt(price)
      .toLocaleString()
      .replace(/,/g, ".")
  }
  const renderHouses = () => {
    return (
      properties &&
      properties.length > 0 &&
      properties.map((property, index) => {
        if (index <= 7) {
          return (
            <Link to={`/propiedad?id=${property.id}`}>
              <StateContainer>
                <StateImage bg={property.images[0]}>
                  <StateInfo>
                    <StateLabel>{property.listType}</StateLabel>
                  </StateInfo>
                </StateImage>
              </StateContainer>
              <Description>{property.description.slice(0,90)}...</Description>
              <Location>{property.location}</Location>
              <Price>
                {property.currency} {property.price}
              </Price>
              <RowItems>
                <p>mts2: {property.mts2}</p>
                <p>Baños: {property.bathroom}</p>
                <p>Dormitorios: {property.bedroom}</p>
              </RowItems>
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
  flex-direction: row;
  justify-content: center;
  background-color: ${theme.themeColor};
  align-items: center;
  padding: 0.5rem;
  width: 7rem;
  margin: 1rem;
`

const StateLabel = styled.h5`
  letter-spacing: 3px;

  text-transform: uppercase;
  font-family: LeagueSpartanBold;
  font-weight: normal;
  font-size: 15.15px;
  text-align: center;
  color: #fff;
  margin-bottom: 0px;
  margin-top: 4px;
`

const StateImage = styled.div`
  background-image: url(${props => props.bg});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;

  :hover {
    cursor: pointer;
  }
  width: 100%;
  height: 20rem;
`

const Description = styled.p`
  font-family: LeagueSpartanBold;
  font-weight: normal;
  font-size: 11.29px;
  line-height: 18.55px;
  text-align: left;
  color: ${theme.themeColor};
  width: 392.98px;
  text-transform: Capitalize;
  margin-top: 0.8rem;
  margin-bottom: 0.5rem;
`

const Location = styled.p`
  font-family: LeagueSpartanBold;
  font-weight: normal;
  font-size: 11.29px;
  line-height: 13.55px;
  text-align: left;
  color: ${theme.secundaryColor};
`

const Price = styled.p`
  font-family: LeagueSpartanBold;
  font-weight: normal;
  font-size: 23.39px;
  line-height: 13.55px;
  text-align: left;
  color: ${theme.themeColor};
`

const StateContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  flex-wrap: wrap;
  width: 392.98px;
  border: 2.42px solid ${theme.secundaryColor};
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
  padding: 0.2rem;

  @media (max-width: 768px) {
    width: 100%;
  }
`

const RowItems = styled.div`
  display: flex;
  flex-direction: row;

  p {
    font-family: MontserratBold;
    font-weight: normal;
    font-size: 15px;
    margin-right:1rem;
    letter-spacing: 0.2em;
    line-height: 9.3px;
    text-align: left;
    color: ${theme.secundaryColor};
  }
`

const StateAddress = styled.h5`
  font-family: MontserratRegular;
  margin: 0;
  text-align: center;
`

const StatePrice = styled.h4`
  font-family: MontserratBold;
  margin: 0;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  text-align: center;
`

const FeaturedStateRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: start;
  padding: 1rem;
  flex-wrap: wrap;
  justify-content: end;
  a {
    color: transparent;
  }
  @media (max-width: 768px) {
    justify-content: center;
    padding-right: 0px;
    padding-left: 0px;
    width: 100%;
    a {
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
  display: flex;
  flex-direction: column;
  padding: 1rem;

  h4,
  h3,
  h2 {
    margin: 0px;
    font-family: LeagueSpartanBold;
    font-weight: normal;
    font-size: 48.45px;
    line-height: 58.14px;
    text-align: center;

    letter-spacing: 1px;
    text-transform: initial;
    color: ${theme.themeColor};
    text-align: center;
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
