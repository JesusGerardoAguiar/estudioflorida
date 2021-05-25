import React from "react"
import {
  MainDiv,
} from "./styles"
import Media from "react-media"
import EmailIcon from '../../../content/assets/icons/emailwhite.svg'
import CellphoneIcon from '../../../content/assets/icons/cellphonewhite.svg'

const PhoneNumber = ({ location }) => {
  console.log(location)

  const renderHeader = matches => {
    if (matches.small) {
      return <></>
    } else if (matches.large) {
      return (
        <MainDiv
          pathname={location.pathname}
          style={{     height: "2rem", background: "#2f358f", justifyContent: 'flex-end', paddingRight: '2rem' }}
        >
          <p style={{display: 'flex', marginBottom: 0, color: 'white', fontFamily: 'MontserratRegular' }}><img style={{ marginBottom: 0, marginRight: 4 }} src={CellphoneIcon} /> +598 99361742 - <img style={{ marginBottom: 0, marginRight: 4, marginLeft: 4 }} src={EmailIcon} /> sergioltaif@gmail.com</p>
        </MainDiv>
      )
    }
  }
  return (
    <>
      <Media queries={{ small: { maxWidth: 768 }, large: { minWidth: 769 } }}>
        {matches => renderHeader(matches)}
      </Media>
    </>
  )
}

export default PhoneNumber
