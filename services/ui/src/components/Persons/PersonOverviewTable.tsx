import React from 'react';

import Paper from '@material-ui/core/Paper';
import { makeStyles, Theme, createStyles, Table, TableHead, TableRow, TableCell, TableBody, Fab, Typography, Button } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import PersonOverviewCreateDialog from './PersonOverviewCreateDialog';

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
    const [isCreateDialogOpen, setCreateDialogOpen] = React.useState(false);

    const handleCreateDialogClickOpen = () => {
        setCreateDialogOpen(true);
    };

    const handleCreateDialogClose = () => {
        setCreateDialogOpen(false);
    };

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
                    onClick={handleCreateDialogClickOpen}>
                    Add person
                </Button>
            </TableCell>
        </TableRow>
    );

    const renderDialogs = () => (
        <PersonOverviewCreateDialog open={open} onClose={handleCreateDialogClose} />
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