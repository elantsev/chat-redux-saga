import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, compose, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import "./index.css";
import * as serviceWorker from "./serviceWorker";
import App from "./App";
import { chat } from "./reducers";
import setupSocked from "./sockets";
import handleNewMessage from "./sagas";
import username from "./utils/name";

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  chat,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

const socket = setupSocked(store.dispatch, username);
sagaMiddleware.run(handleNewMessage, { socket, username });

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
