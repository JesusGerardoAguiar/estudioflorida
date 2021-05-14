import React, { useState } from "react"
import styled from "styled-components"
import { makeStyles } from "@material-ui/core/styles"

import Button from "@material-ui/core/Button"
import SearchIcon from "@material-ui/icons/Search"
import ClearAllIcon from "@material-ui/icons/ClearAll"
import SelectComponent from "./SelectComponent"

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

const Contact = () => {
  const classes = useStyles()
  const [propertyType, setPropertyType] = useState("")
  const dummyMenuItems = [
    { value: 10, label: "Item 1" },
    { value: 20, label: "Item 2" },
  ]

  return (
    <SearchContainer>
      <SelectRow>
        <SelectComponent
          label="Tipo de Propiedad"
          menuItems={dummyMenuItems}
          property={propertyType}
          setPropertyValue={setPropertyType}
          labelColor="#2f358f"
        />
        <SelectComponent
          label="Tipo de Listado"
          menuItems={dummyMenuItems}
          property={propertyType}
          setPropertyValue={setPropertyType}
          labelColor="#2f358f"
        />
        <SelectComponent
          label="Moneda"
          menuItems={dummyMenuItems}
          property={propertyType}
          setPropertyValue={setPropertyType}
          labelColor="#2f358f"
        />
        <SelectComponent
          label="Min Precio"
          menuItems={dummyMenuItems}
          property={propertyType}
          setPropertyValue={setPropertyType}
          labelColor="#2f358f"
        />
        <SelectComponent
          label="Max Precio"
          menuItems={dummyMenuItems}
          property={propertyType}
          setPropertyValue={setPropertyType}
          labelColor="#2f358f"
        />
        <ButtonDiv>
          <Button
            variant="contained"
            color="primary"
            size="medium"
            className={classes.button}
            startIcon={<SearchIcon />}
          >
            Buscar
          </Button>
          <Button
            style={{    marginLeft: '0px'}}
            variant="contained"
            color="secundary"
            size="medium"
            className={classes.button}
            startIcon={<ClearAllIcon />}
          >
            Limpiar
          </Button>
        </ButtonDiv>
      </SelectRow>
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
    background-color: #2f358f;
    margin-bottom: 0.5rem;
    margin-left: 0px!important;
  }
  .MuiFormControl-root {
    margin-top: 0.5rem !important;
    margin-bottom: 0.5rem !important;
    margin-left: 0 !important;
    margin-right: 0.5rem;
    min-width: 120px;
  }
  .MuiSelect-root{
    background: white;
  }
  .MuiButtonBase-root {
    margin-left: 0px;
    width: 100%;
    margin: 8px;
    margin-right: 0.5rem;
  }
  #maxprice {
    height: 4.5rem;
  }

  @media (max-width: 768px) {
    width: 100%!important;
   }
 
`

const SelectRow = styled.div`
  display: flex;
  flex-direction: row;
  width: inherit;
  align-items: center;
`

const ButtonDiv = styled.div`
  align-items: baseline;
  display: flex;
  flex-direction: row;

`
export default Contact
