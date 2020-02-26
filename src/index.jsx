import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise';
import logger from 'redux-logger';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createHistory as history } from 'history';
import carsReducer from './reducers/carsReducer';
import createCar from "./components/createcar"
import CarsIndex from "./containers/carsIndex"
import App from './containers/app'

import '../assets/stylesheets/application.scss';

const reducers = combineReducers({
  garage: (state = null, action) => state,
  cars: carsReducer
});


const middlewares = applyMiddleware(reduxPromise, logger);

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers, {}, middlewares)}>
    <Router history={history}>
      <Switch>
        <Route path="/" component = {CarsIndex} />
        <Route path="/createcar" component={createCar}  />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);
