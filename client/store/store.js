import loggerMiddleware from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './game';

const store = createStore(reducer, applyMiddleware(thunk, loggerMiddleware));

// const store = createStore(reducer);

export default store;

// Note: this API requires redux@>=3.1.0
// const store = createStore(
//   rootReducer,
//   applyMiddleware(thunk)
// );
