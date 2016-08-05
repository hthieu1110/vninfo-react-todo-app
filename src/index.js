import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, IndexRoute } from 'react-router';
import { browserHistory } from 'react-router';


import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './App';
import Home from './Home';

ReactDOM.render((
  <Router history={browserHistory}>
    <Route component={App}>
        <IndexRoute component={Home} />
        <Route path="/" component={Home} />
    </Route>
  </Router>
), document.getElementById('root'));
