import React from 'react';
import {
  Button,
  Paper,
  Dialog,
  DialogTitle,
  DialogActions,
} from '@material-ui/core';

const DialogModal = ({ open, close, title, children }) => (
  // <Paper elevation={2} variant='outlined'>
    <Dialog
      open={open}
      onClose={close}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
      {children}
      <DialogActions>
        <Button onClick={close} color="primary" variant='contained'>
          Fechar
        </Button>
      </DialogActions>
    </Dialog>
  // </Paper>
)
export default DialogModal