import React from "react"
import {
  MainDiv,
  RowProducts,
  ProdCircle,
  Button,
  ButtonDiv,
  IconDiv,
  SaleCircle,
} from "./style"
import { Link } from "gatsby"
import SectionHeader from "../SectionHeader"
import Icono11 from "../../../content/assets/icons/sale.svg"

const ProductSection = ({ products1, products2, products3, products4 }) => {
  return (
    <MainDiv>
      <SectionHeader title="Productos" hasIcon={false} />
      <RowProducts>
        {products1.map(prod => (
          <ProdCircle backgroundImg={prod.prodImg}>
            <div style={{ display: "none" }} id="ProdCircle">
              <Link to={prod.link}>
                <IconDiv backgroundImg={prod.icon} />
                <p>{prod.text}</p>
              </Link>
            </div>
          </ProdCircle>
        ))}
      </RowProducts>
      <RowProducts>
        {products2.map(prod => (
          <ProdCircle backgroundImg={prod.prodImg}>
            <div style={{ display: "none" }} id="ProdCircle">
              <Link to={prod.link}>
                <IconDiv backgroundImg={prod.icon} />
                <p>{prod.text}</p>
              </Link>
            </div>
          </ProdCircle>
        ))}
      </RowProducts>
      <RowProducts>
        {products3.map(prod => (
          <ProdCircle backgroundImg={prod.prodImg}>
            <div style={{ display: "none" }} id="ProdCircle">
              <Link to={prod.link}>
                <IconDiv backgroundImg={prod.icon} />
                <p>{prod.text}</p>
              </Link>
            </div>
          </ProdCircle>
        ))}
      </RowProducts>
      <RowProducts>
        {products4.map(prod => (
          <ProdCircle backgroundImg={prod.prodImg}>
            <div style={{ display: "none" }} id="ProdCircle">
              <Link to="/cortinas">
                <IconDiv backgroundImg={prod.icon} />
                <p>{prod.text}</p>
              </Link>
            </div>
          </ProdCircle>
        ))}
        <SaleCircle>
          <div style={{ display: "none" }} id="ProdCircle">
            <Link to="/sale">
              <IconDiv backgroundImg={Icono11} />
              <p>Sale</p>
            </Link>
          </div>
        </SaleCircle>
      </RowProducts>
    </MainDiv>
  )
}

export default ProductSection
