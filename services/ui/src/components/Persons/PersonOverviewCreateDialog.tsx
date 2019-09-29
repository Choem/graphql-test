import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from '@material-ui/core';

const PersonOverviewCreateDialog = ({ openState, handleClose }) => {
  return (
    <Dialog onClose={handleClose} aria-labelledby="create-person-dialog-title" open={openState}>
      <DialogTitle id="create-person-dialog-title">Create a new person</DialogTitle>
      <DialogContent>
        <DialogContentText>
          To create a new person fill in all required fields.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleClose} color="primary">
          Create
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default PersonOverviewCreateDialog;