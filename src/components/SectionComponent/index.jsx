import React from "react"
import { MainDiv, TextDiv, TextContainer } from "./style"
import SectionHeader from "../SectionHeader"

const SectionComponent = ({ arrayTexts, title, hasIcon, icon }) => {
  const renderText = () => {
    if (arrayTexts && arrayTexts.length !== 0) {
      return arrayTexts.map(text => <p>{text}</p>)
    }
  }
  return (
    <MainDiv>
      <SectionHeader title={title} hasIcon={hasIcon} icon={icon} />
      <TextDiv>
        <TextContainer>
          <p>
            Decorart es una empresa independiente fundada en 1981, con casi 40
            años de experiencia en el rubro de tapicería, cortinados, telas,
            carpintería, alfombras. Somos una empresa la cual ofrece la
            posibilidad de personalización completa, para que cada cliente
            encuentre el mueble que mas le guste y se ajuste a sus necesidades
            de tamaño, tapizado, colores, entre otras caracteristicas personalizables.
            <br />
            <br /> Hoy en día, resulta cada vez más difícil encontrar empresas
            con tantos años de experiencia y que ofrezcan productos de clase,
            hechos con materiales de altísima calidad y con un excelente respaldo
            post-venta ofrecido por sus propios dueños.
            <br />
            <br />
            Nuestro clientes buscan diseño acompañado de la mano de un buen
            diseñador experimentado y saber que tienen la seguridad de estar
            incorporando en sus hogares muebles de una excelente calidad,
            durabilidad y versatilidad.
            <br />
            <br />
            Trabajamos dia a dia para que eso sea posible. A partir de esto
            surge el nombre de Julio Imbriani como dueño y como uno de los
            tapiceros mas nombrados en Uruguay en los últimos tiempos. Se ha
            lucido y expuesto durante mucho tiempo con su especializada y
            calificada mano de obra en diferentes mueblerías de nombre como
            Revello, Cobarrer, entre otras. Dentro de su cartera de clientes y trabajos
            se destacan varias embajadas (Suiza, Holanda, Guatemala, Italia,
            Alemania), Conaprole, Price Waterhouse Coopers, Consorcio del Este,
            Museo Nacional de Artes Visuales y muchos más. Tambien elegido por
            varios diseñadores de interiores para llevar adelante sus diferentes
            proyectos.
            <br />
            <br /> Con su gran gusto e interés por la decoración apararece
            Teresa De Marco aportando siempre su cuota de calidad para tratar
            con publico y su excelente asesoramiento tanto en tapicería como en
            cortinados. Siempre vanguardista en todo lo que es telas y
            tendencias.
            <br />
            <br /> Allá por el año 2001 aparace con gran influencia y entusiasmo
            Betania Imbriani, hija de ambos, gran apasionada por el negocio
            familiar desde muy chiquita. Recibida de diseñadora de interiores de
            la Escuela de Diseño de Interiores de Graciela Mattos. Inquieta por
            naturaleza decide empezar un largo recorrido de varios países y
            culturas por Europa, EE. UU. y América Latina que fueron enriqueciendo
            sus conocimientos y dotándola de diferentes miradas. Fué entonces
            que la pasión por este profesión se apodero definitivamente en ella.
            Hace ya varios años que esta al frente del comercio intentando
            impregnarle a cada proyecto su humilde conocimiento basado en años
            de estudio y experiencia generada.
          </p>
        </TextContainer>
      </TextDiv>
    </MainDiv>
  )
}

export default SectionComponent
