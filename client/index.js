import React from 'react';
import ReactDOM from 'react-dom';

import { Router } from 'react-router-dom';
import history from './history';
import App from './App';

ReactDOM.render(
  <Router history={history}>
    <App />
  </Router>,
  document.getElementById('root') // make sure this is the same as the id of the div in your index.html
);
