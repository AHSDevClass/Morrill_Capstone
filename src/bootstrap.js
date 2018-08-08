import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(compose((window.devToolsExtension ? window.devToolsExtension() : f => f)(createStore)));

import 'bootstrap/dist/css/bootstrap.css';
import './style/main.scss';
import history from './history';
import Layout from './components/layout';
import Home from './components/home';
import Register from './components/register';
import Login from './components/login';
import Dashboard from './components/dashboard/dashboard';


function main() {
  ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
      <BrowserRouter history={history}>
        <Switch>
          <Layout>
            <Route path="/" exact component={Home} />
            <Route path="/home" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/dashboard" component={Dashboard} />
          </Layout>
        </Switch>
      </BrowserRouter>
    </Provider>
    , document.querySelector('.app-wrapper'));
}

document.addEventListener('DOMContentLoaded', main);
