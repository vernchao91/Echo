import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import RootReducer from "../reducers/root_reducer";
export default configureStore


const configureStore = (preloadedState = {}) => {
  return (
    createStore(RootReducer, preloadedState, applyMiddleware(thunk, logger))
  )
}