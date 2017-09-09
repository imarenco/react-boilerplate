import { BrowserRouter, Route } from 'react-router-dom';
import React from 'react';

import {
  App,
} from '../containers';

export default () => (
  <BrowserRouter>
    <div>
      <Route path="/" component={App} />
    </div>
  </BrowserRouter>
);
