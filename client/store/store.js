import loggerMiddleware from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import reducer from './game';

// const store = createStore(reducer, applyMiddleware(loggerMiddleware));

const store = createStore(reducer);

export default store;
