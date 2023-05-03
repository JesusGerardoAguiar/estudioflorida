import React, { useState, useEffect } from "react"
import Layout from "../components/layout"
import { createGlobalStyle } from "styled-components"
import styled from "styled-components"
import SearchPropiedades from "../components/SearchTab/SearchPropiedades"
import PriceTagIcon from "../../content/assets/icons/pricetag.png"
import BathIcon from "../../content/assets/icons/bathtub.svg"
import BedIcon from "../../content/assets/icons/king_bed.svg"
import { Link } from "gatsby"
import queryString from "query-string"
import {theme} from '../theme';
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
  h4,h5,h6{
  }
  a{
    text-decoration: none!important;
  }
`

const Propiedades = ({ location, data }) => {
  let params = queryString.parse(location.search)
  const { propertyType, listType, bedrooms, minPrice, maxPrice,pageNumber, state, zones } = params

  const [currentPage, setCurrentPage] = useState(
    pageNumber ? Number(pageNumber) : 1
  )
  const [itemsPerPage, setItemsPerPage] = useState(6)
  const [pageNumbers, setPageNumbers] = useState(null)
  const propertiesToBeFiltered = data.allMdx.nodes
    .filter(node => node.frontmatter.propertyType !== null)
    .map(frontmatter => {
      return { ...frontmatter.frontmatter }
    })

  useEffect(() => {
    let numberOfPages = calcpagenumbers(properties, itemsPerPage)
    console.log("this is number of pages" + numberOfPages)
    numberOfPages !== null && setPageNumbers(numberOfPages)
  }, [])

  const handleClickPagination = event => {
    setCurrentPage(Number(event.target.id))
    document.body.scrollTop = document.documentElement.scrollTop = 0
    let newObjParam = { ...params, pageNumber: Number(event.target.id) }
    const newLocation = queryString.stringify(newObjParam)
    location.search = newLocation
    window.location.href = `/propiedades?${location.search}`
  }

  export const accentFold = (inStr) => {
    return inStr.replace(
      /([àáâãäå])|([çčć])|([èéêë])|([ìíîï])|([ñ])|([òóôõöø])|([ß])|([ùúûü])|([ÿ])|([æ])/g,
      function (str, a, c, e, i, n, o, s, u, y, ae) {
        if (a) return "a";
        if (c) return "c";
        if (e) return "e";
        if (i) return "i";
        if (n) return "n";
        if (o) return "o";
        if (s) return "s";
        if (u) return "u";
        if (y) return "y";
        if (ae) return "ae";
      }
    );
  };
  const properties = propertiesToBeFiltered
    .filter(
      property =>
        property.propertyType === propertyType &&
        (listType ? property.listType === listType : true) &&
        (bedrooms ? property.bedroom === bedrooms : true)&&
        (minPrice ? property.price >= minPrice : true)&&
        (maxPrice ? property.price <= maxPrice : true)&&
        (state ? property.state === state  : true)&&
        (zones ?  accentFold(property.zones) === accentFold(zones) : true)
    )
    .reverse()

  const transformText = text => {
    return text && text[0].toUpperCase() + text.slice(1)
  }

  const renderRentedText = property => {
    console.log(property)
    if (property.soldout) {
      return <h5>Estado: VENDIDA</h5>
    } else if (property.rented) {
      return <h5>Estado: ALQUILADA</h5>
    }
    return ""
  }

  const renderParseInt = price => {
    if(price.trim() === ""){
      return "-"
    }
    return (price)
  }
  const sortByName = (a, b) => {
    if (a.title < b.title) {
      return -1
    }
    if (a.title > b.title) {
      return 1
    }
    return 0
  }
  const sortFav = (a, b) => {
    return a.destacada-b.destacada
  }
  properties.sort((a,b) => sortByName(a,b)).sort((a, b) => sortFav(a, b)).reverse()
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = properties.slice(indexOfFirstItem, indexOfLastItem)


  const renderProperties = currentItems => {
    return (
      currentItems &&
      currentItems.length > 0 &&
      currentItems.map(property => {
        return (
          <PropertyContainer>
            <Link to={`/propiedad?id=${property.id}`}>
              <PropertyRow>
                <img
                  alt="propiedad"
                  src={property.images && property.images[0]}
                />
                <TextColumn>
                  <h3>{property.title}</h3>
                  <h3 style={{ alignSelf: "flex-start" }}>{property.location}</h3>
                  <h5
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      width: "25rem",
                      alignItems: "center",
                    }}
                  >
                    {/* “___m2 - ___dormitorio/s - ___ baño/s */}
                      {property.mts2}mts<sup>2</sup>{" "}{" "}
                      &#9679;{" "}
                     {property.bedroom} Dormitorios{" "}
                    &#9679;{" "}
                    {property.bathroom === "1" ? `${property.bathroom} Baño` :`${property.bathroom} Baños` } 
                  </h5>
                  <p id="description">{property.description}</p>
                  {renderRentedText(property)}
                  <PriceTag>
                    {property.currency} {renderParseInt(property.price)}
                    <img alt="propiedad" src={PriceTagIcon} />
                  </PriceTag>
                </TextColumn>
              </PropertyRow>
            </Link>
          </PropertyContainer>
        )
      })
    )
  }

  const renderTitle = () => {
    let params = queryString.parse(location.search)
    if (params.propertyType === "galponesylocalescomerciales") {
      return `Galpones y Locales Comerciales ${
        params.listType && params.listType !== ""
          ? "- " + transformText(params.listType)
          : ""
      }`
    } else if (params.propertyType === "camposychacras") {
      return `Campos y Chacras ${
        params.listType && params.listType !== ""
          ? "- " + transformText(params.listType)
          : ""
      }`
    }
    return `${transformText(params.propertyType)} ${
      params.listType && params.listType !== ""
        ? "- " + transformText(params.listType)
        : ""
    }`
  }

  return (
    <>
      <GlobalStyles />
      <Layout location={location}>
        <Container>
          <FiltersColumn>
            <PresentationText>{renderTitle()}</PresentationText>
            <SearchPropiedades filterValues={params} />
          </FiltersColumn>
          <Properties>{renderProperties(currentItems)}</Properties>
        </Container>
        <PaginationDiv>
          {pageNumbers !== null &&
            pageNumbers.map(number => {
              return (
                <Li
                  key={number}
                  id={number}
                  currentNumber={
                    number === currentPage ? `1px solid ${theme.themeColor};` : ""
                  }
                  onClick={e => handleClickPagination(e)}
                >
                  {number}
                </Li>
              )
            })}
        </PaginationDiv>
      </Layout>
    </>
  )
}

export const FiltersColumn = styled.div`
  display:flex;
  flex-direction: column;
  @media (max-width: 768px) {
    align-self: flex-start;
    width:100%;
  }
`

export const PaginationDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

const PriceTag = styled.div`
  width: 9rem;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  align-self: flex-end;
  background-color: ${theme.themeColor};
  color: #fff;
  padding: 7px 5px;
  cursor: pointer;
  clear: both;
  margin-top: 0px;
  font-size: 17px;
  font-family: MontserratRegular;

  img {
    width: 1rem !important;
  }

  @media (max-width: 768px) {
    align-self: flex-start;
  }
`

const TextColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  margin-left: 1rem;
  h3 {
    margin: 0px;
    font-family: LeagueSpartanBold;
    work-break: break-all;
    color: ${theme.themeColor};
    margin-bottom: 0px;
    margin-top: 0px;
    padding-top: 0px;
  }
  h4 {
    margin: 0px;
    font-family: MontserratBold;
    work-break: break-all;
    color: #2f358f;
    margin-bottom: 0px;
    margin-top: 0px;
    padding-top: 0px;
  }
  h5 {
    margin: 0px;
    font-family: MontserratRegular;
    work-break: break-all;
    margin-bottom: 0.5rem;
    margin-top: 0.5rem;
    padding-top: 0px;
    color: ${theme.secundaryColor};
    img{display:none;}
  }
  p {
    margin: 0px;
    font-family: MontserratRegular;
    work-break: break-all;
    margin-bottom: 0.5rem;
    margin-top: 0.5rem;
    padding-top: 0px;
    text-align: justify;
  }
  #description {
    height: 6rem;
    overflow: auto;
  }
  @media (max-width: 768px) {
    h3 {
      width: 15rem;
      margin-top: 1rem;
    }
    p {
      width: 14rem;
    }
    h5 {
      align-self: flex-start !important;
      width: 11rem !important;
      flex-wrap: wrap !important;
    }
  }
`

const PropertyContainer = styled.div`
  padding: 1rem;
  border: 2.42px solid ${theme.secundaryColor};
  width: auto;
  padding-top: 1rem;
  padding-bottom: 1rem;
  margin-bottom: 1rem;
  a {
    color: black !important;
  }
  :hover {
    cursor: pointer;
    opacity: 0.8;
    transition: 1s;
  }
`

const Properties = styled.div`
  padding: 2rem;
  padding-top: 4rem;
  width: 100%;
  @media (max-width: 768px) {
    padding: 0rem;
  }
`

const PropertyRow = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: baseline;
  justify-content: start;
  align-items: end;
  img {
    margin-bottom: 0;
    width: 23.333333rem;
  }
  @media (max-width: 768px) {
    width: 17.333333rem;
    flex-direction:column;
  }
`

export const Li = styled.li`
  border: ${props => props.currentNumber};

  :hover {
    opacity: 0.5;
  }
  border-radius: 26px;
  width: 2rem;
  height: 2rem;
  justify-content: center;
  text-align: center;
  text-decoration: none;
  font-family: MontserratRegular;
  list-style-type: none;
  cursor: pointer;
  display: flex;
  flex-direction: column;
`

const PresentationText = styled.h2`
  margin: 0px;
  font-family: MontserratBold;
  work-break: break-all;
  color: ${theme.themeColor};
  margin-bottom: 0px;
  text-align: center;
  margin-top: 0px;
  padding: 0.5rem;
  padding-top: 0px;
  padding-bottom: 2rem;
`

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: start;
  padding: 3rem;
  @media (max-width: 768px) {
    padding: 2rem;
    flex-direction:column;
  }
`

export default Propiedades

const calcpagenumbers = (items, itemsPerPage) => {
  const pageNumbers = []
  for (let i = 1; i <= Math.ceil(items.length / itemsPerPage); i++) {
    pageNumbers.push(i)
  }
  return pageNumbers
}

export const pageQuery = graphql`
  query Properties {
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
          soldout
          rented
          destacada
          location
          rooms
        }
      }
    }
  }
`
