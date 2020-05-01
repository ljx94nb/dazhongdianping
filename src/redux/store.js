import { createStore, applyMiddleware, compose } from "redux";
import state from "./modules";
import createSagaMiddleware from "redux-saga";
import mySaga from "./middleware/sagas";

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
  : compose;

const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware));

const store = createStore(state, enhancer);

// then run the saga
sagaMiddleware.run(mySaga);

export default store;
