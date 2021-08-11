import { combineReducers, createStore } from "redux";
import { firebaseReducer } from "react-redux-firebase";
import * as firebase from "firebase";

const rootReducer = combineReducers(reducers {
  firebase: firebaseReducer
});

const initialState = {};

const store = createStore(rootReducer, initialState)