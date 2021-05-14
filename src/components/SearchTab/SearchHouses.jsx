import React, { useState } from "react"
import styled from "styled-components"
import { makeStyles } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"
import SearchIcon from "@material-ui/icons/Search"
import ClearAllIcon from "@material-ui/icons/ClearAll"
import SelectComponent from "./SelectComponent"
import SnackbarComponent from "../Snackbar"
import { navigate } from "gatsby"
import {
  PropertyType,
  ListType,
} from "./MenuItems"

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  root: {
    width: "10rem",
  },
  button: {
    margin: theme.spacing(1),
  },
}))

const SearchHouses = () => {
  const classes = useStyles()
  const [filterState, setFilterState] = useState({
    propertyType: "",
    listType: "",

  })
  const [openSnackbar, setOpenSnackbar] = useState(false)

  const changeFilter = payload => {
    const keyObject = payload.keyObject
    setFilterState({ ...filterState, [keyObject]: payload.value })
  }

  const clearFilter = () => {
    setFilterState({
      propertyType: "",
      listType: "",
    })
  }

  const fieldsNotEmpty = (
    propertyType,
    listType,
  ) =>
    propertyType !== "" &&
    listType !== ""

  const checkFields = () => {
    const { propertyType, listType } = filterState
    if (fieldsNotEmpty(propertyType, listType)) {
      navigate(
        `propiedades?propertyType=${propertyType}&listType=${listType}`
      )
    } else {
      setOpenSnackbar(true)
    }
  }

  const closeSnakbar = (event, reason) => {
    setOpenSnackbar(false)
  }

  return (
    <SearchContainer>
      <SnackbarComponent variant='error' open={openSnackbar} handleClose={closeSnakbar} msg={"Ninguno de los campos puede ser vacio"} />
      <SelectRow>
        <SelectComponent
           label="Tipo de Propiedad"
           keyObject="propertyType"
           menuItems={PropertyType}
           filter={filterState.propertyType}
           setFilterValue={changeFilter}
          labelColor="#2f358f"
        />
        <SelectComponent
          label="Tipo de Listado"
          keyObject="listType"
          menuItems={
            filterState.propertyType !== "terrenos" ? ListType : []
          }
          filter={filterState.listType}
          setFilterValue={changeFilter}
          labelColor="#2f358f"
        />
         <ButtonDiv>
            <Button
              variant="contained"
              color="secundary"
              size="large"
              className={classes.button}
              startIcon={<ClearAllIcon />}
              onClick={() => clearFilter()}
            >
              Limpiar
            </Button>
            <Button
              variant="contained"
              color="primary"
              size="large"
              className={classes.button}
              startIcon={<SearchIcon />}
              onClick={() => checkFields()}
            >
              Buscar
            </Button>
          </ButtonDiv>
      </SelectRow>
    </SearchContainer>
  )
}

const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: end;
  flex-wrap: wrap;
  width: 97.777777777%;
  .MuiButton-containedPrimary {
    background-color: #2f358f;
    margin-bottom: 0.5rem;
    margin-left: 0px !important;
  }
  .MuiFormControl-root {
    margin-top: 0.5rem !important;
    margin-bottom: 0.5rem !important;
    margin-left: 0 !important;
    margin-right: 0 !important;
    min-width: 120px;
  }
  .MuiButtonBase-root{
    @media (max-width: 768px) {
      margin-left: 0!important;
      margin-right: 0!important;
      
    }
  }

  .MuiButton-containedPrimary{
    @media (max-width: 768px) {
      margin-left: 0.5rem!important;
    }
  }
  .MuiButtonBase-root {
    margin-left: 0px;
    margin-rigth: 0px;
    width: 100%;
    margin: 8px;
  }
  #maxprice {
    height: 4.5rem;
  }

  @media (max-width: 768px) {
    width: 100% !important;
  }
`

const SelectRow = styled.div`
  display: flex;
  flex-direction: column;
  width: inherit;
`

const ButtonDiv = styled.div`
  align-items: baseline;
  display: flex;
  flex-direction: row;

  @media (max-width: 768px) {
    margin-bottom: 0.5rem;
  }
`

export default SearchHouses