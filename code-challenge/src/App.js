import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ApolloClient, { createNetworkInterface } from 'apollo-client';
import React from 'react';
import { createStore } from 'redux';
import { ApolloProvider } from 'react-apollo';
import AddEmployeeWithMutation from './components/create-employee';
import Home from './containers/home';
import EmployeeProfile from './containers/employee-profile';
import reduxApp from './store';

const client = new ApolloClient({
  networkInterface: createNetworkInterface({
    uri: 'http://localhost:4000/graphql'
  }),
  dataIdFromObject: o => o.id
});

const App = () => (
  <ApolloProvider client={client} store={createStore(reduxApp)}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/view/:employeeId" component={EmployeeProfile} />
        <Route exact path="/create" component={AddEmployeeWithMutation} /> */}
      </Switch>
    </BrowserRouter>
  </ApolloProvider>
);

export default App;
