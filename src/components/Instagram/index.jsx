import React, { useCallback } from "react"
import {
  Box,
  Button,
  FormContainer,
  ButtonDiv,
  TitleContainer,
  Container,
} from "./style"
import { navigate } from "gatsby"
import Insta1 from './insta1.jpeg';
import Insta2 from './insta2.jpeg';
import Insta3 from './insta3.jpeg';

const isClient = typeof window !== "undefined"

const Instagram = ({ propertyId, location }) => {
  return (
    <Container>
      <TitleContainer id="featured">
        <h2>Nuestro Instagram</h2>
      </TitleContainer>
      <div style={{display:'flex', flexWrap: 'wrap', flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
        <a id="insta" style={{width:'25rem'}} href="https://www.instagram.com/p/CPG3szZB4T_/" target="__blank">
            <img src={Insta1} />
        </a>
        <a id="insta" style={{width:'25rem'}} href="https://www.instagram.com/p/COk5eAJBR6E/" target="__blank">
        <img src={Insta2} />
        </a>
        <a id="insta" style={{width:'25rem'}} href="https://www.instagram.com/p/COQfHC3B-v3/" target="__blank">
        <img src={Insta3} />
        </a>
      </div>
    </Container>
  )
}

export default Instagram
