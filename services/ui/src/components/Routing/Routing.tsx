import React from 'react';

import { Route, Switch } from 'react-router-dom';

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Articles, PersonOverviewPage } from '..';

const useStyles = makeStyles((theme: Theme) => createStyles({
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    toolbar: theme.mixins.toolbar,
}));

const Routing = () => {
    const classes = useStyles();

    return (
        <main className={classes.content}>
            <div className={classes.toolbar} />
            <Switch>
                <Route exact path="/" component={PersonOverviewPage} />
                <Route path="/" component={Articles} />
            </Switch>
        </main>
    )
}

export default Routing;