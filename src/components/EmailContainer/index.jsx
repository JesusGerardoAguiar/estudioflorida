import React, { useCallback } from "react"
import { Box, Button, FormContainer, ButtonDiv, TitleContainer, Container } from "./style"
import Input from "./Input"
import InputArea from "./InputArea"
import { Formik } from "formik"
import * as Yup from "yup"
import {navigate} from 'gatsby';

const isClient = typeof window !== 'undefined';

const EmailContainer = ({ propertyId, location, showTitle }) => {
  const onSubmit = useCallback(values => {
    window.open(`https://api.whatsapp.com/send?phone=+59899757820+&text=%20Nombre:${values.name}  Email: ${values.email} Consulta: ${values.consult} ID de la propiedad: ${propertyId} Propiedad Consultada: ${location}`, 'blank')
    
  }, [])
  return (<Container>
      <TitleContainer id="featured">
             {showTitle ? <h2>Contactanos</h2> :<></>}
            </TitleContainer>
    <Box>
      <Formik
        initialValues={{ email: "", name: "", consult: "" }}
        validationSchema={Yup.object().shape({
          name: Yup.string().required(),
          consult: Yup.string().required(),
        })}
        onSubmit={onSubmit}
      >
        {({ handleChange, handleSubmit, errors, isSubmitting, values }) => {
          return (
            <FormContainer onSubmit={handleSubmit}>
              <Input
                placeholder="Nombre / Empresa"
                name="name"
                field={values.name}
                setField={handleChange}
              />
              <Input
                placeholder="Email"
                name="email"
                field={values.email}
                setField={handleChange}
              />
              <InputArea
                placeholder="Consulta"
                name="consult"
                field={values.consult}
                setField={handleChange}
              />
              <ButtonDiv>
                {isClient ? <Button type="submit">Enviar Consulta</Button> : <></>}
              </ButtonDiv>
            </FormContainer>
          )
        }}
      </Formik>
    </Box>
  </Container>

  )
}

export default EmailContainer
