import React from 'react';
import { render } from 'react-dom';
import {Router, Route, Link} from 'react-router';

import App from './containers/app';

let NotFound = () => {
  return (
    <div className="wrapper">
      <h1 className="error">
        404 ERROR: There is nothing here for you!
      </h1>
      <Link to="/">Start over.</Link>
    </div>
  )
}

render((
  <Router>
    <Route path="/" component={App} />
    <Route path='*' component={NotFound} />
  </Router>
), document.getElementById('app'));
