import {createLogger} from "redux-logger";
import { createStore,combineReducers,applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import {composeWithDevTools} from 'redux-devtools-extension'
import resultReducer from './trainer'

const reducer = combineReducers({resultReducer})

const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
)

const store = createStore(reducer, middleware);



export default store;


