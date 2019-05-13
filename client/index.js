import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/index'

import history from './history';
import App from './App';

ReactDOM.render(
  <Provider store={store}>
    <HashRouter history={history}>
      <App />
    </HashRouter>
  </Provider>,
  document.getElementById('root') // make sure this is the same as the id of the div in your index.html
);
