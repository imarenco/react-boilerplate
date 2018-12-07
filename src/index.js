import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import React from 'react';
import createSagaMiddleware from 'redux-saga';
import mySaga from './sagas';
import * as reducers from './reducers';
import routes from './config/routes';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  combineReducers(reducers),
  applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(mySaga);

const render = (RootApp) => {
  ReactDOM.render(
    <Provider store={store}>
      <RootApp />
    </Provider>,
    document.getElementById('mount'),
  );
};

render(routes);


require('./styles/style.scss');
