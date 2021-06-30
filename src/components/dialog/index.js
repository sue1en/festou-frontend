import React from 'react';
import {
  Button,
  IconButton,
  Paper,
  Dialog,
  DialogTitle,
  DialogActions,
  makeStyles
} from '@material-ui/core';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import { composeClasses } from '@material-ui/data-grid';

const useStyles = makeStyles({
  dialogHeader:{
    display: 'flex'
  },
  styledTitle:{
    flexGrow:1,
  },
  icon: {
    // opacity: 0,
    '&:hover':{
      color:'#dc004e'
    }
  }
})

const DialogModal = ({ open, close, title, children }) => {
  const classes = useStyles()
  return(
    // <Paper elevation={2} variant='outlined'>
      <Dialog
        open={open}
        onClose={close}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <div className={classes.dialogHeader}>
          <DialogTitle id="alert-dialog-title" className={classes.styledTitle}>
            {title}
          </DialogTitle>
          <DialogActions>
            <IconButton onClick={close} variant='outlined' className={classes.icon}>
              <HighlightOffIcon/>
            </IconButton>
          </DialogActions>

        </div>
        {children}
      </Dialog>
    // </Paper>
  )
}

export default DialogModal