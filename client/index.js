import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <Provider>
    <Root />
  </Provider>,
  document.getElementById('root') // make sure this is the same as the id of the div in your index.html
);
