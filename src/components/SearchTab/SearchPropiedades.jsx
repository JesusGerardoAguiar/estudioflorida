import React, { useState } from "react"
import styled from "styled-components"
import { makeStyles } from "@material-ui/core/styles"

import Button from "@material-ui/core/Button"
import SearchIcon from "@material-ui/icons/Search"
import ClearAllIcon from "@material-ui/icons/ClearAll"
import SelectComponent from "./SelectComponent"
import SnackbarComponent from "../Snackbar"
import { navigate } from "gatsby"
import TextField from "@material-ui/core/TextField"
import {
  PropertyType,
  ListType,
  MinPrice,
  MaxPrice,
  StateType,
  ZoneType,
} from "./MenuItems"
import { theme } from "../../theme"

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

const SearchPropiedades = ({ filterValues }) => {
  const classes = useStyles()

  const [filterState, setFilterState] = useState(filterValues)
  const [openSnackbar, setOpenSnackbar] = useState(false)

  const changeFilter = payload => {
    const keyObject = payload.keyObject
    setFilterState({ ...filterState, [keyObject]: payload.value })
  }

  const clearFilter = () => {
    setFilterState({
      propertyType: "",
      listType: "",
      minPrice: "",
      maxPrice: "",
      bedrooms: 0,
      states: "",
      zones: "",
    })
  }

  const fieldsNotEmpty = (propertyType, listType) => propertyType !== ""

  const checkFields = () => {
    const {
      propertyType,
      listType,
      minPrice,
      maxPrice,
      bedrooms,
      states,
      zones,
    } = filterState
    if (fieldsNotEmpty(propertyType, listType)) {
      navigate(
        `?propertyType=${propertyType}${
          listType !== "" && listType !== undefined
            ? `&listType=${listType}`
            : ""
        }${
          minPrice !== "" && minPrice !== undefined
            ? `&minPrice=${minPrice}`
            : ""
        }${
          maxPrice !== "" && maxPrice !== undefined
            ? `&maxPrice=${maxPrice}`
            : ""
        }${
          bedrooms !== 0 && bedrooms !== undefined
            ? `&bedrooms=${bedrooms}`
            : ""
        }${states !== "" && states !== undefined ? `&states=${states.toLowerCase()}` : ""}${
          zones !== "" && zones !== undefined ? `&zones=${zones}` : ""
        }`
      )
    } else {
      setOpenSnackbar(true)
    }
  }

  const closeSnakbar = (event, reason) => {
    setOpenSnackbar(false)
  }

  const dummyMenuItems = [
    { value: 10, label: "Item 1" },
    { value: 20, label: "Item 2" },
  ]

  return (
    <SearchContainer>
      <SnackbarComponent
        variant="error"
        open={openSnackbar}
        handleClose={closeSnakbar}
        msg={"Ninguno de los campos puede ser vacio"}
      />
      <SelectColumn>
        <SelectComponent
          label="Tipo de propiedad"
          keyObject="propertyType"
          menuItems={PropertyType}
          filter={filterState.propertyType}
          setFilterValue={changeFilter}
          labelColor={theme.themeColor}
        />
        <SelectComponent
          label="Operación"
          keyObject="listType"
          menuItems={ListType}
          filter={filterState.listType}
          setFilterValue={changeFilter}
          labelColor={theme.themeColor}
        />
        <SelectComponent
          label="Desde"
          keyObject="minPrice"
          menuItems={MinPrice}
          filter={filterState.minPrice}
          setFilterValue={changeFilter}
          labelColor={theme.themeColor}
        />
        <SelectComponent
          label="Hasta"
          keyObject="maxPrice"
          menuItems={MaxPrice}
          filter={filterState.maxPrice}
          setFilterValue={changeFilter}
          labelColor={theme.themeColor}
        />
        <SelectComponent
          label="Departamento"
          keyObject="states"
          menuItems={StateType}
          filter={filterState.states}
          setFilterValue={changeFilter}
          labelColor={theme.themeColor}
        />
        <SelectComponent
          label="Barrio"
          keyObject="zones"
          menuItems={ZoneType.filter(zone => {
            if(filterState.states){return zone.zone === filterState.states.toLowerCase()}
            return zone
          }).map((zone) => { return { ...zone, name:zone.value } }).sort((a, b) => a.name.localeCompare(b.name))}
          filter={filterState.zones}
          setFilterValue={changeFilter}
          labelColor={theme.themeColor}
        />
         <SelectComponent
          label="Dormitorios"
          keyObject="bedrooms"
          menuItems={[
            { value: "0", name: "Monoambiente" },
            { value: "1", name: "1" },
            { value: "2", name: "2" },
            { value: "3", name: "3" },
            { value: "4", name: "4" },
            { value: "5", name: "5" },
            { value: "6", name: "6" },
            { value: "7", name: "7" },
            { value: "8", name: "8" },
            { value: "9", name: "9" },
          ]}
          filter={filterState.bedrooms}
          setFilterValue={changeFilter}
          labelColor={theme.themeColor}
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
      </SelectColumn>
    </SearchContainer>
  )
}

const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: end;
  flex-wrap: wrap;
  width: 97.777777777%;
  .MuiButton-containedPrimary {
    background-color: ${theme.themeColor};
    margin-bottom: 0.5rem;
    margin-left: 0px !important;
  }
  .MuiFormControl-root {
    margin-top: 0.5rem !important;
    margin-bottom: 0.5rem !important;
    margin-left: 0 !important;
    margin-right: 0.5rem;
    min-width: 120px;
  }
  .MuiButtonBase-root {
    @media (max-width: 768px) {
      margin-left: 0 !important;
      margin-right: 0 !important;
    }
  }

  .MuiButton-containedPrimary {
    @media (max-width: 768px) {
      margin-left: 0.5rem !important;
    }
  }
  .MuiSelect-root {
    background: white;
  }
  .MuiButtonBase-root {
    margin-left: 0px;
    width: 100%;
    margin: 8px;
    margin-right: 0.5rem;
    background-color: ${theme.themeColor};
    color: #fff;
    :hover {
      background-color: ${theme.themeColor};
      color: #fff;
      svg {
        color: #fff;
        fill: #fff;
      }
    }
    svg {
      color: #fff;
      fill: #fff;
    }
  }
  #maxprice {
    height: 4.5rem;
  }

  .MuiInputLabel-formControl {
    top: -10px;
  }
  .MuiSvgIcon-root,
  .MuiFormLabel-root {
    color: ${theme.themeColor}!important;
    font-family: LeagueSpartanBold;

    margin-bottom: 0px !important;
    label {
    }
  }
  @media (max-width: 768px) {
    width: 100% !important;
  }
`

const SelectColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: inherit;
  align-items: center;
  .MuiTextField-root {
    width: 96%;
    color: ${theme.themeColor};
    .MuiInputLabel-root {
      color: ${theme.themeColor};
      margin-left: 0px;
    }
  }
  .MuiInputLabel-root {
    color: ${theme.themeColor};
    margin-left: -11px;
  }
  .MuiSelect-root {
    padding-left: 0px;
  }
  .MuiInputBase-root {
    color: ${theme.themeColor};
  }
  .MuiInput-underline {
    &:before {
      border-bottom: none;
    }
  }
  .MuiFilledInput-underline {
    &:before {
      border-bottom: 1px solid ${theme.themeColor};
    }
  }
  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`

const ButtonDiv = styled.div`
  align-items: baseline;
  display: flex;
  flex-direction: row;

  @media (max-width: 768px) {
    margin-bottom: 0.5rem;
    width: 100%;
  }
`

export default SearchPropiedades
