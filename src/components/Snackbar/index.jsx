import { amber, blue, green, red } from "@material-ui/core/colors"
import Icon from "@material-ui/core/Icon"
import IconButton from "@material-ui/core/IconButton"
import Snackbar from "@material-ui/core/Snackbar"
import SnackbarContent from "@material-ui/core/SnackbarContent"
import { makeStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import clsx from "clsx"
import React from "react"

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: red[600],
    color: "#FFFFFF",
  },
  success: {
    backgroundColor: green[600],
    color: "#FFFFFF",
  },

  error: {
    backgroundColor: red[600],
    color: "#FFFFFF",
  },
  
  info: {
    backgroundColor: blue[600],
    color: "#FFFFFF",
  },
  warning: {
    backgroundColor: amber[600],
    color: "#FFFFFF",
  },
}))

const variantIcon = {
  success: "check_circle",
  warning: "warning",
  error: "error_outline",
  info: "info",
}

function SnackbarComponent({ variant, open, handleClose, msg }) {
  const classes = useStyles()

  return (
    <Snackbar
      variant={variant}
      open={open}
      onClose={(event, reason) => handleClose(event, reason)}
      classes={{
        root: classes.root,
      }}
      ContentProps={{
        variant: "body2",
        headlineMapping: {
          body1: "div",
          body2: "div",
        },
      }}
    >
      <SnackbarContent
        className={classes[variant]}
        message={
          <div className="flex items-center">
            <Typography className="mx-8">{msg}</Typography>
          </div>
        }
      />
    </Snackbar>
  )
}

export default React.memo(SnackbarComponent)
