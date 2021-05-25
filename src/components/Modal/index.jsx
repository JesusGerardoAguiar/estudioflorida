import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import Dialog from "@material-ui/core/Dialog"
import Carousel from "../Carousel"
import styled from "styled-components"
import { CarouselProvider, Slide, Slider } from "pure-react-carousel"

const useStyles = makeStyles({
  root: {
    maxWidth: "20rem",
  },
  media: {
    height: "20rem",
    backgroundSize: "contain",
    width: '100%'
  },
  content: {
    width: "20rem",
  },
  h2: {
    fontFamily: "LeagueSpartanBold",
    color: "#aa5c3b",
    textTransform: "uppercase",
  },
  p: {
    fontFamily: "LeagueSpartanBold",
    textAlign: "justify",
  },
  button: {
    width: "fit-content",
    height: "3rem",
    width: "100%",
    fontSize: "0.6rem",
    backgroundColor: "white",
    border: "3px solid #aa5c3b",
    fontFamily: "LeagueSpartanBold",
    textTransform: "uppercase",
    color: "#aa5c3b",
  },
})

 function MediaCard({ open, handleClose, product, isProject }) {
  const classes = useStyles()

  const renderCardMedia = () => {
    if(product.activityImages){
      return product.activityImages.map((image) => <CardMedia
      className={classes.media}
      image={image}
      title={product.title}
      />)
      
    }
    return null
  }
  // product.activityImages ? product.activityImages.length : 0
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <Card className={classes.root}>
        <Carousel
          totalSlides={product.activityImages ? product.activityImages.length : 0}
          StyledCarousel={StyledCarousel}
          StyledSlider={StyledSlider}
          StyledSlide={StyledSlide}
        >
          {renderCardMedia()}
        </Carousel>
        <CardContent className={classes.content}>
          <Typography
            gutterBottom
            variant="h5"
            component="h2"
            className={classes.h2}
          >
            {product.title}
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            style={{ overflow: "auto", height: "5rem" }}
            className={classes.p}
          >
            {product.description}
          </Typography>
          {isProject ? (
            <></>
          ) : (
            <a href={product.activityImages ? product.activityImages[0] : ''} download style={{ boxShadow: "none" }}>
              <Button className={classes.button}>
                Descargar Imagen Para Pre Compra
              </Button>
            </a>
          )}
        </CardContent>
      </Card>
    </Dialog>
  )
}

export const StyledCarousel = styled(CarouselProvider)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .slideInner___2mfX9 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  li{
    height: 20rem!important;
    margin-top: 1rem;
  }
  `
  
  export const StyledSlider = styled(Slider)`
  width: 100%;
  justify-content: flex-start;
  display: flex;
  flex-direction: column;
  
  `
  
  export const StyledSlide = styled(Slide)`
  .carousel__slide-focus-ring {
    display: none;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  `
  
  export default MediaCard