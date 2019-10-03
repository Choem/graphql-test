import React, { useState } from 'react';

import Paper from '@material-ui/core/Paper';
import { makeStyles, Theme, createStyles, Table, TableHead, TableRow, TableCell, TableBody, Fab, Typography, Button, Dialog, DialogTitle, DialogContent, DialogContentText, TextField, Select, MenuItem, DialogActions, CircularProgress } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { useCreatePersonMutation, PersonGender } from '../../generated/graphql';

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
        progress_container: {
            flex: 1,
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center'
        },
        progress: {
            margin: theme.spacing(2)
        },
        fab: {
            position: 'fixed',
            bottom: theme.spacing(2),
            right: theme.spacing(2),
        },
        genderSelect: {
            marginTop: theme.spacing(3),
            marginBottom: theme.spacing(1)
        }
    })
);

interface PersonOverViewTableRow {
    id: number;
    name: string;
    age: number;
    gender: PersonGender;
}

const PersonOverviewTable = () => {
    const classes = useStyles();
    const rows: PersonOverViewTableRow[] = [];

    const createPersonMutation = useCreatePersonMutation();

    const [inputName, setInputName] = useState<string>('');
    const [inputAge, setInputAge] = useState<number | null>(null);
    const [inputGender, setInputGender] = useState<PersonGender>(PersonGender.Male);
    const [isOpen, setIsOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleCreatePerson = async () => {
        setIsLoading(true);
        await createPersonMutation({
            name: inputName,
            age: inputAge,
            gender: inputGender
        });
        setTimeout(() => {
            setIsOpen(false);
            setIsLoading(false);
        }, 250);
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
                {renderCreatePersonDialogContent()}
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

    const renderCreatePersonDialogContent = () => {
        if (isLoading) {
            return (
                <div className={classes.progress_container}>
                    <CircularProgress className={classes.progress} />
                </div>
            );
        }

        return (
            <>
                <DialogContentText>
                    To create a new person fill in all required fields.
                </DialogContentText>
                <TextField autoFocus margin="dense" id="name" label="Name" type="text" fullWidth onChange={(event) => setInputName(event.target.value as string)} />
                <TextField margin="dense" id="age" label="Age" type="number" fullWidth onChange={(event) => setInputAge(parseInt(event.target.value as string))} />
                <Select
                    className={classes.genderSelect}
                    fullWidth
                    value={inputGender}
                    onChange={(event) => setInputGender(event.target.value as PersonGender)}
                    inputProps={{
                        name: 'gender',
                        id: 'gender'
                    }}
                >
                    <MenuItem value={"MALE"}>Male</MenuItem>
                    <MenuItem value={"FEMALE"}>Female</MenuItem>
                    <MenuItem value={"ATTACK_HELICOPTER"}>Attack Helicopter</MenuItem>
                </Select>
            </>
        );
    };

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