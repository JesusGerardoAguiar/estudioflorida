import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function InfoDialog({ open, handleClose }) {
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Como realizar la pre compra?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            1.- Dar click en el producto del cual queres consultar en "Ver Más". <br/>
            2.- Descargar la foto de dicho producto con el boton de descarga.<br/>
            3.- Ir al boton de abajo de la derecha y selecciona la opcion de whatsapp.<br/>
            4.- Escribinos por whatsapp enviandonos la foto del producto con tu consulta.<br/>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
}