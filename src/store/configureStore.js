import {createStore, compose, applyMiddleware} from "redux";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";
import createSagaMiddleware from "redux-saga";
import root from "../middleware/sagas";
import rootReducer from "../reducers";

function configureStoreProd(initialState) {
  const middlewares = [
    // Add other middleware on this line...
    createSagaMiddleware()
  ];

  // add support for Redux dev tools
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // eslint-disable-line no-underscore-dangle
  const store = createStore(rootReducer, initialState, composeEnhancers(
    applyMiddleware(...middlewares)
    )
  );

  middlewares[0].run(root);

  return store;
}

function configureStoreDev(initialState) {
  const middlewares = [
    // Add other middleware on this line...
    createSagaMiddleware(),
    reduxImmutableStateInvariant(),
  ];

  // add support for Redux dev tools
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // eslint-disable-line no-underscore-dangle
  const store = createStore(rootReducer, initialState, composeEnhancers(
    applyMiddleware(...middlewares)
    )
  );

  middlewares[0].run(root);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept("../reducers", () => {
      const nextReducer = require("../reducers").default;
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}

const configureStore = process.env.NODE_ENV === "production" ? configureStoreProd : configureStoreDev;

export default configureStore;
