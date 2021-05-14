import React from "react"
import {
  HeaderSectionRow,
  IconRow,
  IconCircle,
  TitleContainer,
  Column,
} from "./style"

const SectionHeader = ({ title, hasIcon, icon, marginTop }) => {
  return (
    <HeaderSectionRow>
      {hasIcon ? (
        <IconRow>
          <IconCircle><img src={icon} style={{ width: '10rem', marginBottom: '0px' }}/></IconCircle>
        </IconRow>
      ) : (
        <></>
      )}
      <TitleContainer>
        <Column style={{ width: "100%" }} marginTop={marginTop}>
          <h1>{title}</h1>
        </Column>
        <Column
          style={{ borderTop: "3px solid #AA5C3B", width: "100%" }}
        ></Column>
      </TitleContainer>
    </HeaderSectionRow>
  )
}

export default SectionHeader
