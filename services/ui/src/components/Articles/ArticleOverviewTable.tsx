import React from "react";
import { makeStyles, Theme, createStyles, Paper, Table, TableHead, TableRow, TableCell, TableBody } from "@material-ui/core";

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
  })
);

const ArticleOverviewTable = () => {
  const classes = useStyles();

  const renderTable = () => (
    <Paper className={classes.paper}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Mentioned</TableCell>
            <TableCell>Created at</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {renderTableContent()}
        </TableBody>
      </Table>
    </Paper>
  );

  const renderTableContent = () => (
    <>

    </>
  );

  return (
    <>

    </>
  );
}

export default ArticleOverviewTable;