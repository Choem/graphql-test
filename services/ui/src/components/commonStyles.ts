import { makeStyles, Theme, createStyles } from "@material-ui/core";

export const useCommonStyles = makeStyles((theme: Theme) =>
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
      display: 'flex',
      width: '100%',
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
  })
);