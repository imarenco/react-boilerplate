import { BrowserRouter, Route } from 'react-router-dom';
import React from 'react';
import LazyRoute from './lazy-load';
import Login from '../components/Login';


export default () => (
  <BrowserRouter>
    <div>
      <Route exact path="/" render={props => <LazyRoute {...props} component={import('../containers/App')} />} />
      <Route exact path="/login" component={Login} />
    </div>
  </BrowserRouter>
);
