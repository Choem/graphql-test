import React, { createRef, useState } from 'react';

import Paper from '@material-ui/core/Paper';
import { makeStyles, Theme, createStyles, Table, TableHead, TableRow, TableCell, TableBody, Fab, Typography, Button, Dialog, DialogTitle, DialogContent, DialogContentText, TextField, Select, MenuItem, DialogActions } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            position: 'relative',
            width: '100%',
            height: `calc(100vh - ${theme.mixins.toolbar.height})`
        },
        paper: {
            marginTop: theme.spacing(3),
            width: '100%',
            overflowX: 'auto',
            marginBottom: theme.spacing(2)
        },
        table: {},
        addButton: {
            marginTop: theme.spacing(1),
            marginBottom: theme.spacing(1)
        },
        fab: {
            position: 'fixed',
            bottom: theme.spacing(2),
            right: theme.spacing(2),
        }
    })
);

const PersonOverviewTable = () => {
    const classes = useStyles();
    const rows: any = [];

    const [values, setValues] = useState({
        name: '',
        age: null,
        gender: 0
    });
    const [isOpen, setIsOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleCreatePerson = async () => {
        setIsLoading(true);
        // TODO: Generate GraphQL call
        setIsOpen(false);
    };

    const handleChange = (event: React.ChangeEvent<{ name?: string, value: unknown }>) => {
        setValues(oldValues => ({
            ...oldValues,
            [event.target.name as string]: event.target.value
        }));
    };

    const handleOpen = () => {
        setIsOpen(true);
    };

    const handleClose = () => {
        setIsOpen(false);
    }

    const renderTable = () => (
        <Paper className={classes.paper}>
            <Table className={classes.table}>
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell align="right">Name</TableCell>
                        <TableCell align="right">Age</TableCell>
                        <TableCell align="right">Gender</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {renderTableContent()}
                </TableBody>
            </Table>
        </Paper>
    );

    const renderTableContent = () => {
        if (!rows.length) {
            return (
                renderTableEmptyRow()
            );
        }

        return (
            <>
                {
                    rows.map((row: any) => (
                        <TableRow key={row.id}>
                            <TableCell component="th" scope="row">{row.id}</TableCell>
                            <TableCell align="right">{row.name}</TableCell>
                            <TableCell align="right">{row.age}</TableCell>
                            <TableCell align="right">{row.personGender}</TableCell>
                        </TableRow>
                    ))
                }
            </>
        );
    }

    const renderTableEmptyRow = () => (
        <TableRow>
            <TableCell align="center" colSpan={4}>
                <Typography variant="body2">
                    There is no data to be displayed yet.
                </Typography>
                <Button
                    className={classes.addButton}
                    color="primary"
                    variant="contained"
                    onClick={handleOpen}>
                    Add person
                </Button>
            </TableCell>
        </TableRow>
    );

    const renderDialogs = () => (
        <Dialog onClose={handleClose} aria-labelledby="create-person-dialog-title" open={isOpen}>
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
                <Button onClick={handleClose} color="primary">
                    Cancel
            </Button>
                <Button onClick={handleCreatePerson} color="primary">
                    Create
            </Button>
            </DialogActions>
        </Dialog>
    );

    const renderFab = () => (
        <Fab color="primary" aria-label="add" className={classes.fab}>
            <AddIcon />
        </Fab>
    );

    return (
        <>
            {renderDialogs()}
            {renderTable()}
            {rows.length > 0 &&
                renderFab()
            }
        </>
    )
};

export default PersonOverviewTable;