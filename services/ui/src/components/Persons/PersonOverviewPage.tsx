import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core';
import PersonOverviewTable from './PersonOverviewTable';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: 'relative',
      width: '100%',
      height: `calc(100vh - ${theme.mixins.toolbar.height})`
    },
  }));

const PersonOverviewPage = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <PersonOverviewTable />
    </div>
  );
}

export default PersonOverviewPage;