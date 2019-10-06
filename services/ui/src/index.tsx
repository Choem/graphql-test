import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import { App } from './containers';

import * as serviceWorker from './serviceWorker';
import ApolloClient from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { split } from 'apollo-link';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider } from '@apollo/react-hooks';
import { WebSocketLink } from 'apollo-link-ws';
import { getMainDefinition } from 'apollo-utilities';
import { SnackbarProvider } from 'notistack';

const httpLink = new HttpLink({
  uri: '/middleware/graphql'
});

const wsLink = new WebSocketLink({
  uri: `ws://${window.location.hostname}/middleware/graphql/subscriptions`,
  options: {
    reconnect: true
  }
});

const link = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    );
  },
  wsLink,
  httpLink,
);

const apolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  link: link
});

ReactDOM.render(
  <ApolloProvider client={apolloClient}>
    <SnackbarProvider maxSnack={1}>
      <Router>
        <App />
      </Router>
    </SnackbarProvider>
  </ApolloProvider>,
  document.getElementById('root')
);

serviceWorker.unregister();