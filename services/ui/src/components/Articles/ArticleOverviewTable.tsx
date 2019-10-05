import React, { useState } from "react";
import { Paper, Table, TableHead, TableRow, TableCell, TableBody, CircularProgress, Button, Typography, Fab, Dialog, DialogTitle, DialogContent, DialogActions, DialogContentText } from "@material-ui/core";
import { useCommonStyles } from "../commonStyles";
import AddIcon from '@material-ui/icons/Add';
import { useListArticlesQuery, useCreateArticleMutation } from "../../generated/graphql";
import { useSnackbar } from "notistack";

const ArticleOverviewTable = () => {
  const classes = useCommonStyles();

  const listArticlesQuery = useListArticlesQuery();
  const [createArticleMutation] = useCreateArticleMutation();

  const { enqueueSnackbar } = useSnackbar();
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleCreateArticle = async () => {
    setIsLoading(true);

    await createArticleMutation({
      variables: {
        authorId: 0,
        name: '',
        description: ''
      }
    });

    setTimeout(() => {
      setIsOpen(false);
      setIsLoading(false);
    }, 500);
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

  const renderTableContent = () => {
    if (listArticlesQuery.loading) {
      return renderTableLoadingRow();
    }

    if (!listArticlesQuery.data!.listArticles.count) {
      return renderEmptyTableRow();
    }

    return (
      <>
        {
          listArticlesQuery.data!.listArticles.articles.map((article: any) => {
            return (<TableRow>
              <TableCell component="th">{article.id}</TableCell>
              <TableCell align="right">{article.name}</TableCell>
              <TableCell align="right">{article.author.name}</TableCell>
              <TableCell align="right">{article.createdAt}</TableCell>
            </TableRow>);
          })
        }
      </>
    )
  }

  const renderEmptyTableRow = () => (
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
          Add article
                </Button>
      </TableCell>
    </TableRow>
  );

  const renderTableLoadingRow = () => (
    <TableRow>
      <TableCell align="center" colSpan={4}>
        <div className={classes.progress_container}>
          <CircularProgress className={classes.progress} />
        </div>
      </TableCell>
    </TableRow>
  );

  const renderDialogs = () => (
    <Dialog onClose={handleClose} aria-labelledby="create-article-dialog-title" open={isOpen}>
      <DialogTitle id="create-article-dialog-title">Create a new article</DialogTitle>
      <DialogContent>
        {renderCreateArticleDialogContent()}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
            </Button>
        <Button onClick={handleCreateArticle} color="primary">
          Create
            </Button>
      </DialogActions>
    </Dialog>
  );

  const renderCreateArticleDialogContent = () => {
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
      </>
    );
  };

  const renderFab = () => (
    <Fab
      color="primary"
      aria-label="add"
      className={classes.fab}
      onClick={handleOpen}>
      <AddIcon />
    </Fab>
  );

  return (
    <>
      {renderDialogs()}
      {renderTable()}
      {listArticlesQuery.data && listArticlesQuery.data!.listArticles.count > 0 &&
        renderFab()
      }
    </>
  );
}

export default ArticleOverviewTable;