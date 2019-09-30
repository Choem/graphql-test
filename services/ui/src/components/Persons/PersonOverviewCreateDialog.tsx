import React, { RefObject, useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button, TextField, MenuItem, Select } from '@material-ui/core';

interface PersonOverviewCreateDialogProps {
  dialogRef: React.RefObject<PersonOverviewCreateDialog>;
}

const PersonOverviewCreateDialog = (props: PersonOverviewCreateDialogProps) => {

  const [values, setValues] = useState({
    name: '',
    age: null,
    gender: 0
  });

  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [handleCreate, setHandleCreate] = useState(async () => { });

  const open = ({ handleCreate }: { handleCreate: Promise<void> }) => {
    setIsOpen(true);
    setHandleCreate(handleCreate);
  };

  const handleChange = (event: React.ChangeEvent<{ name?: string, value: unknown }>) => {
    setValues(oldValues => ({
      ...oldValues,
      [event.target.name as string]: event.target.value
    }));
  };

  const handleOnClose = () => {
    setIsOpen(false);
  };

  const handleOnOpen = () => {
    setIsOpen(true);
  }

  return (
    <Dialog onClose={handleOnClose} aria-labelledby="create-person-dialog-title" open={isOpen}>
      <DialogTitle id="create-person-dialog-title">Create a new person</DialogTitle>
      <DialogContent>
        <DialogContentText>
          To create a new person fill in all required fields.
        </DialogContentText>
        <TextField autoFocus margin="dense" id="name" label="Name" type="text" fullWidth />
        <TextField margin="dense" id="age" label="age" type="number" fullWidth />
        <Select
          value={values.gender}
          onChange={handleChange}
          inputProps={{
            name: 'gender',
            id: 'gender'
          }}
        >
          <MenuItem value={0}>Male</MenuItem>
          <MenuItem value={1}>Female</MenuItem>
          <MenuItem value={2}>Attack Helicopter</MenuItem>
        </Select>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleOnClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleOnClose} color="primary">
          Create
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default PersonOverviewCreateDialog;