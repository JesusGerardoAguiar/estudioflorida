import React from "react"
import ClickAwayListener from "@material-ui/core/ClickAwayListener"
import Grow from "@material-ui/core/Grow"
import Paper from "@material-ui/core/Paper"
import Popper from "@material-ui/core/Popper"
import MenuItem from "@material-ui/core/MenuItem"
import MenuList from "@material-ui/core/MenuList"
import { makeStyles } from "@material-ui/core/styles"
import { Link } from "gatsby"
import { LinkBox } from "./styles"

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    height: "inherit",
    width: "fit-content",
    padding: "1rem",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 7,
  },
  paper: {
    marginRight: theme.spacing(2),
    backgroundColor: "#2f358f",
    zIndex: 7,
  },
}))

export default function MenuListComposition({ submenuChilds, submenu }) {
  const classes = useStyles()
  const [open, setOpen] = React.useState(false)
  const anchorRef = React.useRef(null)

  const handleToggle = () => {
    setOpen(prevOpen => !prevOpen)
  }

  const handleClose = event => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return
    }

    setOpen(false)
  }

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault()
      setOpen(false)
    }
  }

  const renderLinks = () => {
    return (
      submenuChilds &&
      submenuChilds.map(subMenuChild => (
        <MenuItem onClick={handleClose}>
          <Link
            style={{ textTransform: "initial", color: "white" }}
            to={`/${subMenuChild.menuPath}`}
          >
            {subMenuChild.menuTitle[0].toUpperCase() + subMenuChild.menuTitle.slice(1)}
          </Link>
        </MenuItem>
      ))
    )
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open)
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus()
    }

    prevOpen.current = open
  }, [open])

  return (
    <div style={{ height: 'inherit' }}  onMouseEnter={handleToggle}
    onMouseLeave={() => setOpen(false)}>
      <LinkBox
        className={classes.root}
       
      >
        <a
          ref={anchorRef}
          aria-controls={open ? "menu-list-grow" : undefined}
          aria-haspopup="true"
        >
          {submenu}
        </a>
      </LinkBox>
      <Popper
      style={{ zIndex: 7 }}
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === "bottom" ? "center top" : "center bottom",
            }}
          >
            <Paper className={classes.paper}>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList
                  style={{ zIndex: 4 }}
                  autoFocusItem={open}
                  id="menu-list-grow"
                  onKeyDown={handleListKeyDown}
                >
                  {renderLinks()}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </div>
  )
}
