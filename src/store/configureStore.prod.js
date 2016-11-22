import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import root from "../middleware/sagas";
import rootReducer from "../reducers";

export default function configureStore(initialState) {
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
