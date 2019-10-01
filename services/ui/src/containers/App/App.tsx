import React from 'react';

import { Header, Sidebar, Routing } from '../../components';

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import ApolloClient from 'apollo-client';
import { ApolloProvider } from '@apollo/react-hoc';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloLink } from 'apollo-link';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
  }));

const apolloHttpLink = new ApolloLink();

const apolloClient = new ApolloClient({
  link: apolloHttpLink,
  cache: new InMemoryCache()
});

const App = () => {
  const classes = useStyles();

  return (
    <ApolloProvider client={apolloClient}>
      <div className={classes.root}>
        <CssBaseline />
        <Header />
        <Sidebar />
        <Routing />
      </div>
    </ApolloProvider>
  )
}

export default App;