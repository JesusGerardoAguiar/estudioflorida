import React, { useState } from "react"
import styled from "styled-components"
import { makeStyles } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"
import SearchIcon from "@material-ui/icons/Search"
import ClearAllIcon from "@material-ui/icons/ClearAll"
import SelectComponent from "./SelectComponent"
import SnackbarComponent from "../Snackbar"
import { theme } from "../../theme"
import { navigate } from "gatsby"
import { PropertyType, ListType, ZoneType, StateType } from "./MenuItems"

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
    zones: "",
    states: "",
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
      zones: "",
      states: "",
    })
  }

  const fieldsNotEmpty = (propertyType, listType, zones, states) =>
    propertyType !== "" && listType !== "" && zones !== "" && states !== ""

  const checkFields = () => {
    const { propertyType, listType, zones, states } = filterState
    if (fieldsNotEmpty(propertyType, listType, zones, states)) {
      navigate(
        `propiedades?propertyType=${propertyType}&listType=${listType}&states=${states.toLowerCase()}&zones=${zones}`
      )
    } else {
      setOpenSnackbar(true)
    }
  }

  const closeSnakbar = (event, reason) => {
    setOpenSnackbar(false)
  }

  return (
    <Container>
      <SnackbarComponent
        variant="error"
        open={openSnackbar}
        handleClose={closeSnakbar}
        msg={"Ninguno de los campos puede ser vacio"}
      />
      <BackgroundDiv>
        <SearchContainer>
          <SelectRow>
            <SelectComponent
              label="Operación"
              keyObject="listType"
              menuItems={
               ListType
              }
              filter={filterState.listType}
              setFilterValue={changeFilter}
            />
            <SelectComponent
              label="Tipo de propiedad"
              keyObject="propertyType"
              menuItems={PropertyType}
              filter={filterState.propertyType}
              setFilterValue={changeFilter}
            />
            <SelectComponent
              label="Departamento"
              keyObject="states"
              menuItems={StateType}
              filter={filterState.states}
              setFilterValue={changeFilter}
            />

            <SelectComponent
              label="Barrio"
              keyObject="zones"
              menuItems={ZoneType.filter((zone) => {
                return zone.zone === filterState.states.toLowerCase()
              
              }).map((zone) => { return { ...zone, name:zone.value } }).sort((a, b) => a.name.localeCompare(b.name))}
              filter={filterState.zones}
              setFilterValue={changeFilter}
            />
          </SelectRow>
          <ButtonDiv>
           
            <Button
              variant="contained"
              color="primary"
              size="large"
              className={classes.button}
              onClick={() => checkFields()}
            >
              Buscar
            </Button>
            <Button
            style={{marginRight:'0.5rem'}}
              variant="contained"
              color="secundary"
              size="large"
              className={classes.button}
              onClick={() => clearFilter()}
            >
              Limpiar
            </Button>
          </ButtonDiv>
        </SearchContainer>
      </BackgroundDiv>
    </Container>
  )
}

const BackgroundDiv = styled.div`
  width: 100%;
  padding: 0.5rem;
  background-color: ${theme.secundaryColor};
`

const Container = styled.div`
  .MuiFormControl-root {
    @media (max-width: 768px) {
      width: 11.8rem;
    }
  }

  .MuiFormLabel-root {
    @media (max-width: 768px) {
      width: 6rem;
      text-align: initial;
    }
  }

  .MuiInputLabel-shrink {
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
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;

  @media (max-width: 768px) {
    width: inherit;
    flex-direction:column;
  }
  .MuiButton-containedPrimary {
    background-color: ${theme.themeColor};
  }
  .MuiFormControl-root {
    margin: 8px;
    min-width: 165.74px;
    background: #fff;
  }
  .MuiButtonBase-root {
    width: 189.84px;
    background: ${theme.themeColor};
    border-radius:0px;
    font-family: LeagueSpartanBold;
    font-weight: normal;
    font-size: 17.26px;
    line-height: 20.71px;
    color: #fff;
    
    padding: 1.2rem;
    text-align: center;

    &:hover{
      background: ${theme.themeColor};
      color: ${theme.secundaryColor};
    }
  }
  .MuiInputBase-root {
    font-family: LeagueSpartanBold;
    font-weight: normal;
    text-align: left;
    color: ${theme.themeColor};
      }
  .MuiSvgIcon-root, .MuiFormLabel-root {
    color: ${theme.themeColor}!important;
    font-family: LeagueSpartanBold;

    margin-bottom:0px!important;
    label{
    }
  }
  .MuiFilledInput-underline:after {
    border-bottom: none;
  }
  .MuiFilledInput-underline:before {
    border-bottom: none;
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
  @media (max-width: 768px) {
    flex-direction:column;
    justify-content:center;
    align-items:center;
  }
`

const ButtonDiv = styled.div`
  align-items: baseline;
  display: flex;
  flex-direction: row;

  @media (max-width: 768px) {
    margin-top: 0.5rem;
    flex-direction:column;
  }
`
export default SearchTab
