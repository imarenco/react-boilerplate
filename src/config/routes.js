import { BrowserRouter, Route } from 'react-router-dom';
import React from 'react';
import Login from '../components/Login';
import Counter from '../containers/App';


export default () => (
  <BrowserRouter>
    <div>    
      <Route exact path="/" component={Counter} />
      <Route exact path="/login" component={Login} />
    </div>
  </BrowserRouter>
);
 