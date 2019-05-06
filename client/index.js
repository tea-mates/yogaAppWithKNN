import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Root from './root';

ReactDOM.render(
  // // place holder for when the store has been setup
  // <Provider store={store}>
  // <HashRouter>
  //   <Root />
  // </HashRouter>
  // </Provider>,

  <HashRouter>
    <Root />
  </HashRouter>,
  document.getElementById('root') // make sure this is the same as the id of the div in your index.html
);
