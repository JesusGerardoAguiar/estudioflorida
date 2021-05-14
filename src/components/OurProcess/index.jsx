import React from "react"
import SectionHeader from "../SectionHeader"
import {
  MainDiv,
  ProcessDiv,
  ProcessImg,
  ProccessTextDiv,
  ButtonDiv,
  Button,
} from "./styles"
import SofaNuevo from "../../../content/assets/img/nuevo.jpg"
import SofaReta from "../../../content/assets/img/reta.jpg"
import Dibujo from "../../../content/assets/img/dibujo5.jpg"
import { Link } from "gatsby"

const OurProcess = () => {
  return (
    <>
      <SectionHeader title="Nuestro Proceso" hasIcon={false} marginTop={0} />
      <MainDiv>
        <ProcessDiv>
          <ProccessTextDiv>
            <h1>Nuevos</h1>
            <p>
              Se hacen a partir de una estructura de álamo carolino la cual es
              una madera super dura. Se hacen de pulgadas y bulones, no grampas
              ni clavos. <br />
              <br />
              La estructura va toda cubierta con una plancha de 5cm de alta
              densidad. Llevan resortes nosar (resorte de auto) y cinchas
              italianas a lo largo y ancho de estructura. <br />
              <br />
              Los almohadones de asiento se hacen con planchas de soft de alta
              densidad (puede ser optativa la densidad con opciones de 26, 28 y 32), recubierto
              con guata en manta para sacar rigidez de la plancha y dar redondeo
              en su forma. <br />
              <br />
              Los almohadones de respaldo se realizan con guata siliconada para
              un almohadon mas descontracturado y si no, de plancha y guata para
              un almohadon mas armado a la vista.
            </p>
          </ProccessTextDiv>
          <ProcessImg backgroundImg={SofaNuevo} />
        </ProcessDiv>
        <ProcessDiv>
          <ProcessImg backgroundImg={SofaReta}></ProcessImg>
          <ProccessTextDiv>
            <h1>Retapizado</h1>
            <p>
              Lo importante en un retapizado es distinguir si vale la pena o no
              invertir en un mueble usado. Cuando el sofa fué bien armado desde
              el origen y con buenos materiales siempre vale la pena invertir en
              retapizar. <br />
              <br />
              ¿Como nos damos cuenta si fue bueno armado en origen? Por lo
              general su estructura no tiene movimientos y sus materiales, aunque
              hayan perdido densidad, siguen estando en uso.
              <br />
              <br />
              Lo que no sirve retapizar es el tipo de muebles que fué armado de
              una manera mas estándar. Nuestros retapizados se desraman por
              completo, no se forran encima, desarmamos y volvemos a armar con
              materiales nuevos y de muy buena calidad.
              <br />
              <br /> Tenemos la obligación de que si hacemos gastar a un cliente en
              arreglar un mueble y gaste en una muy buena tela o cuero, la
              estructura y armado debe acompañar la duración de dichos
              materiales.
            </p>
          </ProccessTextDiv>
        </ProcessDiv>
        <Link to="/retapizados" style={{ width: "13rem", height: " 3rem",  marginTop: "2rem",  marginBottom: "2rem"  }}>
          <ButtonDiv>
            <Button>Ver más</Button>
          </ButtonDiv>
        </Link>
        <ProcessDiv style={{ marginTop: "2rem" }}>
          <ProccessTextDiv>
            <h1>Proyectos</h1>
            <p>
              Para realizar un proyecto de Diseño de Interiores se realizan
              bocetos, planos escalados y perspectivas para poder definir las
              cuestiones más técnicas, que serán completados con detalles más
              puramente estéticos como el color, acabados, iluminación,
              materiales, tejidos, elementos decorativos...
              <br />
              <br />
              Todo proyecto de interiorismo, por pequeño que sea, tiene unas
              fases que el cliente debe conocer para saber exactamente a lo se
              que enfrenta.
            </p>
          </ProccessTextDiv>
          <ProcessImg backgroundImg={Dibujo}></ProcessImg>
        </ProcessDiv>
        <Link to="/proyectos" style={{ width: "13rem", height: " 3rem",  marginTop: "2rem",  marginBottom: "2rem"  }}>
          <ButtonDiv>
            <Button>Ver más</Button>
          </ButtonDiv>
        </Link>
      </MainDiv>
    </>
  )
}

export default OurProcess
