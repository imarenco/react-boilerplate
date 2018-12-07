import { BrowserRouter, Route } from 'react-router-dom';
import React from 'react';
import { DetailCounterContainer } from '../pages/Counter';
import { SignContainer } from '../pages/Login';

export default () => (
  <BrowserRouter>
    <div>    
      <Route exact path="/" component={DetailCounterContainer} />
      <Route exact path="/login" component={SignContainer} />
    </div>
  </BrowserRouter>
);
 