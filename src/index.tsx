import "regenerator-runtime/runtime";
import React from "react";
import { render } from "react-dom";
import App from "./App";
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { Provider } from "react-redux";
import { workerAdministerReducer } from "./pages/WorkerAdminister/Redux/reducer";
import { combineReducers } from 'redux'
import { CandidateAdministerReducer } from "./pages/CandidateAdminister/Redux/reducer";
import { rootSaga } from "./pages/Saga/root";
import 'bootstrap/dist/css/bootstrap.css';

const sagaMiddleware = createSagaMiddleware();
const reducers = combineReducers({
  workerReducer : workerAdministerReducer,
  candidateReducer : CandidateAdministerReducer
})
const store = createStore(reducers, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
