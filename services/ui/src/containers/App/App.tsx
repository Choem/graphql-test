import React from 'react';

import { Header, Sidebar, Routing } from '../../components';

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
}));

const App = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <CssBaseline />
            <Header/>
            <Sidebar/>
            <Routing/>
        </div>
    )
}

export default App;