import React, { useState } from "react"
import styled from "styled-components"
import { makeStyles } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"
import SearchIcon from "@material-ui/icons/Search"
import ClearAllIcon from "@material-ui/icons/ClearAll"
import SelectComponent from "./SelectComponent"
import Collapsible from "react-collapsible"
import SnackbarComponent from '../Snackbar';
import {navigate} from 'gatsby';
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

const SearchTab = () => {
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
    
      
          setOpenSnackbar(false);
  }

  return (
    <Container>
      <SnackbarComponent variant='error' open={openSnackbar} handleClose={closeSnakbar} msg={"Ninguno de los campos puede ser vacio"} />
      <Collapsible trigger="Buscar Propiedad">
        <SearchContainer>
          <SelectRow>
            <SelectComponent
              label="Tipo de Propiedad"
              keyObject="propertyType"
              menuItems={PropertyType}
              filter={filterState.propertyType}
              setFilterValue={changeFilter}
            />
            <SelectComponent
              label="Tipo de Listado"
              keyObject="listType"
              menuItems={
                filterState.propertyType !== "terrenos" ? ListType : []
              }
              filter={filterState.listType}
              setFilterValue={changeFilter}
            />
          </SelectRow>
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
        </SearchContainer>
      </Collapsible>
    </Container>
  )
}

const Container = styled.div`
  .Collapsible {
    text-align: center;
  }

  .Collapsible__trigger {
    font-family: RobotoBlack;
    work-break: break-all;
    margin: 1rem;
    color: #2f358f;
    font-size: 2em;
    margin-left: 0px;
    margin-top: 30px;
    margin-bottom: 0px;
    cursor: pointer;
    text-align: center;
    :hover {
      opacity: 0.8;
    }
    @media (max-width: 768px) {
      font-size: 1.5em;
    }
  }

  .MuiFormControl-root{
    @media (max-width: 768px) {
      width: 9rem;
    }
  }

  .MuiFormLabel-root {
    @media (max-width: 768px) {
      width: 6rem;
      text-align: initial;
    }
  }

  .MuiInputLabel-shrink{
    @media (max-width: 768px) {
      width: 10rem;
      text-align: initial;
    }
  }

  .MuiSelect-root {
    @media (max-width: 768px) {
      margin-bottom: 0.5rem;
    }
  }
`

const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 30rem;

  @media (max-width: 768px) {
    width: inherit;
  }
  .MuiButton-containedPrimary {
    background-color: #2f358f;
  }
  .MuiFormControl-root {
    margin: 8px;
    min-width: 120px;
  }
  .MuiButtonBase-root {
    margin: 8px;
  }
  #maxprice {
    width: 100%;
    height: 4.5rem;
  }
`

const SelectRow = styled.div`
  display: flex;
  flex-direction: row;
  width: inherit;
`

const ButtonDiv = styled.div`
  align-items: baseline;
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    margin-top: 0.5rem;
  }
`
export default SearchTab
