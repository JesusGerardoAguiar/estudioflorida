import React, { useState } from "react"
import { MainDiv, LinkDiv, IconDiv, LinkBox } from "./styles"
import Facebook from "../../../content/assets/icons/facebook.svg"
import Instagram from "../../../content/assets/icons/instagram.svg"
import { Link } from "gatsby"
import Drawer from "@material-ui/core/Drawer"
import { makeStyles } from "@material-ui/core/styles"
import IconButton from "@material-ui/core/IconButton"
import Hamburguer from "../../../content/assets/icons/hamburguer.svg"
import Close from "../../../content/assets/icons/close-2-01.svg"
import LtaiftLogo from "../../../content/assets/icons/logoescritorio-01.svg"
// import LtaiftLogo from "../../../content/assets/img/logoltaif-01.jpg"
import Media from "react-media"
import Scroll from "react-scroll"
import Submenu from "./SubMenu"

const LinkScroll = Scroll.Link
const drawerWidth = 240

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    backgroundColor: "rgb(50, 55, 133, 0.9);",

  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: "rgb(50, 55, 133, 0.9);",
    width: '100%',
    height: '24.111111rem',
  },
  drawerHeader: {
    display: "flex",
    alignItems: "start",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}))

const Header = ({ location }) => {
  console.log(location)
  const [open, setOpen] = useState(false)
  const classes = useStyles()

  const renderHeader = matches => {
    if (matches.small) {
      return (
        <div>
          <MainDiv>
            <div onClick={() => setOpen(true)}>
              <img alt="a" src={Hamburguer} style={{ width: "3rem" }} />
            </div>

            <div>
              <img alt="a" src={LtaiftLogo} style={{ width: "15rem" }} />
            </div>
          </MainDiv>
          <Drawer
            className={classes.drawer}
            variant="persistent"
            anchor="left"
            open={open}
            onClose={() => setOpen(false)}
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            <div className={classes.drawerHeader}>
              <IconButton onClick={() => setOpen(false)}>
                <div>
                  <img
                    alt="a"
                    src={Close}
                    style={{
                      marginBottom: "0px",
                      width: "2rem",
                      zIndex: "2",
                    }}
                  />
                </div>
              </IconButton>
            </div>
            <LinkDiv style={{ borderTop: '0.1px solid white' }} onClick={() => setOpen(false)}>
              <LinkBox>
                <Link>Inicio</Link>
              </LinkBox>
            </LinkDiv>
            <LinkDiv>
              <Submenu
                submenu={"Casas"}
                submenuChilds={[
                  {
                    menuTitle: "Ventas",
                    menuPath: "propiedades?propertyType=casas&listType=ventas",
                  },
                  {
                    menuTitle: "Alquileres",
                    menuPath:
                      "propiedades?propertyType=casas&listType=alquileres",
                  },
                ]}
              />
            </LinkDiv>
            <LinkDiv>
              <Submenu
                submenu={"Apartamentos"}
                submenuChilds={[
                  {
                    menuTitle: "Ventas",
                    menuPath:
                      "propiedades?propertyType=apartamentos&listType=ventas",
                  },
                  {
                    menuTitle: "Alquileres",
                    menuPath:
                      "propiedades?propertyType=apartamentos&listType=alquileres",
                  },
                ]}
              />
            </LinkDiv>
            <LinkDiv>
              <LinkBox>
                <LinkScroll
                  activeClass="active"
                  to="process"
                  spy={true}
                  smooth={true}
                  duration={400}
                >
                  <Link
                    to="/propiedades?propertyType=terrenos"
                    style={{ marginRight: "0px" }}
                  >
                    Terrenos
                  </Link>
                </LinkScroll>
              </LinkBox>
            </LinkDiv>
            <LinkDiv>
              <Submenu
                submenu={"Campos y Chacras"}
                submenuChilds={[
                  {
                    menuTitle: "Ventas",
                    menuPath:
                      "propiedades?propertyType=camposychacras&listType=ventas",
                  },
                  {
                    menuTitle: "Alquileres",
                    menuPath:
                      "propiedades?propertyType=camposychacras&listType=alquileres",
                  },
                ]}
              />
            </LinkDiv>
            <LinkDiv>
              <Submenu
                submenu={"Galpones y Locales Comerciales"}
                submenuChilds={[
                  {
                    menuTitle: "Ventas",
                    menuPath:
                      "propiedades?propertyType=galponesylocalescomerciales&listType=ventas",
                  },
                  {
                    menuTitle: "Alquileres",
                    menuPath:
                      "propiedades?propertyType=galponesylocalescomerciales&listType=alquileres",
                  },
                ]}
                openTest={true}
              />
            </LinkDiv>
            <LinkDiv>
              <LinkBox>
                <LinkScroll
                  activeClass="active"
                  to="Contact"
                  spy={true}
                  smooth={true}
                  duration={400}
                >
                  <Link to="" style={{ marginRight: "0px" }}>
                    Remates
                  </Link>
                </LinkScroll>
              </LinkBox>
            </LinkDiv>
            <LinkDiv>
              <LinkBox>
                <LinkScroll
                  activeClass="active"
                  to="Contact"
                  spy={true}
                  smooth={true}
                  duration={400}
                >
                  <Link to="" style={{ marginRight: "0px" }}>
                    Contacto
                  </Link>
                </LinkScroll>
              </LinkBox>
            </LinkDiv>
          </Drawer>
        </div>
      )
    } else if (matches.large) {
      return (
        <MainDiv pathname={location.pathname}>
          
          <LinkDiv>
            <LinkBox>
              <Link>Inicio</Link>
            </LinkBox>
            <Submenu
              submenu={"Casas"}
              submenuChilds={[
                {
                  menuTitle: "Ventas",
                  menuPath: "propiedades?propertyType=casas&listType=ventas",
                },
                {
                  menuTitle: "Alquileres",
                  menuPath:
                    "propiedades?propertyType=casas&listType=alquileres",
                },
              ]}
            />
            <Submenu
              submenu={"Apartamentos"}
              submenuChilds={[
                {
                  menuTitle: "Ventas",
                  menuPath:
                    "propiedades?propertyType=apartamentos&listType=ventas",
                },
                {
                  menuTitle: "Alquileres",
                  menuPath:
                    "propiedades?propertyType=apartamentos&listType=alquileres",
                },
              ]}
            />
            <LinkBox>
              <LinkScroll
                activeClass="active"
                to="process"
                spy={true}
                smooth={true}
                duration={400}
              >
                <Link
                  to="/propiedades?propertyType=terrenos"
                  style={{ marginRight: "0px" }}
                >
                  Terrenos
                </Link>
              </LinkScroll>
            </LinkBox>
            <Submenu
              submenu={"Campos y Chacras"}
              submenuChilds={[
                {
                  menuTitle: "Ventas",
                  menuPath:
                    "propiedades?propertyType=camposychacras&listType=ventas",
                },
                {
                  menuTitle: "Alquileres",
                  menuPath:
                    "propiedades?propertyType=camposychacras&listType=alquileres",
                },
              ]}
            />
            <Submenu
              submenu={"Galpones y Locales Comerciales"}
              submenuChilds={[
                {
                  menuTitle: "Ventas",
                  menuPath:
                    "propiedades?propertyType=galponesylocalescomerciales&listType=ventas",
                },
                {
                  menuTitle: "Alquileres",
                  menuPath:
                    "propiedades?propertyType=galponesylocalescomerciales&listType=alquileres",
                },
              ]}
              openTest={true}
            />
            <LinkBox>
              <LinkScroll
                activeClass="active"
                to="Contact"
                spy={true}
                smooth={true}
                duration={400}
              >
                <Link to="propiedades?propertyType=remates" style={{ marginRight: "0px" }}>
                  Remates
                </Link>
              </LinkScroll>
            </LinkBox>
            <LinkBox>
              <LinkScroll
                activeClass="active"
                to="Contact"
                spy={true}
                smooth={true}
                duration={400}
              >
                <Link to="contacto" style={{ marginRight: "0px" }}>
                  Contacto
                </Link>
              </LinkScroll>
            </LinkBox>
          </LinkDiv>
          {/* <a
                href="_"
                target="_blank"
              >
                <img alt="a"
                  src={Facebook}
                  style={{ width: "2rem", marginBottom: 0, cursor: "pointer" }}
                />
              </a>
              <a
                href="_"
                target="_blank"
              >
                <img
                alt="a"
                  src={Instagram}
                  style={{ width: "2rem", marginBottom: 0, cursor: "pointer" }}
                />
              </a> */}
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

export default Header
