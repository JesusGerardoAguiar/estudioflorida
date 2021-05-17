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
  h4,h5,h6{
  }
  a{
    text-decoration: none!important;
  }
`

const Propiedades = ({ location, data }) => {
  let params = queryString.parse(location.search)
  const { propertyType, listType, pageNumber } = params

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

  const properties = propertiesToBeFiltered
    .filter(
      property =>
        property.propertyType === propertyType &&
        (listType ? property.listType === listType : true)
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
                  <h5
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      width: "25rem",
                      alignItems: "center",
                    }}
                  >
                    {property.bathroom} Baños{" "}
                    <img
                      alt="propiedad"
                      src={BathIcon}
                      style={{
                        width: "1.8rem",
                        marginBottom: "14.44444444px",
                        marginLeft: 5,
                        marginRight: 5,
                      }}
                    />{" "}
                    &#9679; {property.bedroom} Dormitorios{" "}
                    <img
                      alt="propiedad"
                      src={BedIcon}
                      style={{
                        width: "2rem",
                        marginBottom: "9.44444444px",
                        marginLeft: 5,
                        marginRight: 5,
                      }}
                    />{" "}
                    &#9679;{" "}
                    <>
                      {property.mts2} mts<sup>2</sup>{" "}
                    </>
                  </h5>
                  <p id="description">{property.description}</p>
                  {renderRentedText(property)}
                  <h5 style={{ alignSelf: "flex-end" }}>{property.location}</h5>
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
          <PresentationText>{renderTitle()}</PresentationText>
          <SearchPropiedades filterValues={params} />
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
                    number === currentPage ? "1px solid #016699;" : ""
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
  background-color: #2f358f;
  color: #fff;
  padding: 7px 5px;
  border-radius: 3px;
  cursor: pointer;
  clear: both;
  margin-top: 0px;
  font-size: 17px;
  font-family: RobotoL;

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
    font-family: RobotoM;
    work-break: break-all;
    color: #2f358f;
    margin-bottom: 0px;
    margin-top: 0px;
    padding-top: 0px;
    width: 40rem;
  }
  h4 {
    margin: 0px;
    font-family: RobotoB;
    work-break: break-all;
    color: #2f358f;
    margin-bottom: 0px;
    margin-top: 0px;
    padding-top: 0px;
    width: 40rem;
  }
  h5 {
    margin: 0px;
    font-family: RobotoM;
    work-break: break-all;
    margin-bottom: 0.5rem;
    margin-top: 0.5rem;
    padding-top: 0px;
  }
  p {
    margin: 0px;
    font-family: RobotoL;
    work-break: break-all;
    margin-bottom: 0.5rem;
    margin-top: 0.5rem;
    padding-top: 0px;
    width: 42rem;
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
  border: 1px solid #016699;
  border-radius: 10px;
  width: fit-content;
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
  flex-wrap: wrap;
  align-items: baseline;
  justify-content: start;
  align-items: end;
  img {
    margin-bottom: 0;
    width: 23.333333rem;
  }
  @media (max-width: 768px) {
    width: 17.333333rem;
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
  font-family: RobotoM;
  list-style-type: none;
  cursor: pointer;
  display: flex;
  flex-direction: column;
`

const PresentationText = styled.h2`
  margin: 0px;
  font-family: RobotoB;
  work-break: break-all;
  color: #2f358f;
  margin-bottom: 0px;
  margin-top: 0px;
  padding: 0.5rem;
  padding-top: 0px;
  padding-bottom: 2rem;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem;
  @media (max-width: 768px) {
    padding: 2rem;
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
          destacada
        }
      }
    }
  }
`
